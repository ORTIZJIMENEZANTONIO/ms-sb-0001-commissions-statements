import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("isia182p1_comer_com", ["idComcalculada"], { unique: true })
@Index("comer_comcalculada_pkey", ["idComcalculada"], { unique: true })
@Index("isia182s1_comer_com", ["idTercerocomer"], {})
@Entity("comer_comcalculada", { schema: "sera" })
export class ComerCalculatedComissionEntity {
  @Column("numeric", {
    primary: true,
    name: "id_comcalculada",
    precision: 10,
    scale: 0,
  })
  id: number;

  @Column("numeric", { name: "id_tercerocomer", precision: 3, scale: 0 })
  thirdComerId: number;

  @Column("character varying", { name: "usuario_creo", length: 30 })
  creationUser: string;

  @Column("date", { name: "fecha_creo" })
  createdAt: Date;

  @Column("date", { name: "fecha_ini", nullable: true })
  startDate: Date | null;

  @Column("date", { name: "fecha_fin", nullable: true })
  endDate: Date | null;

  @Column("numeric", {
    name: "id_evento",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  eventId: number | null;

  @Column("numeric", {
    name: "comision_total",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  totalComission: number | null;

  @Column("numeric", {
    name: "tipo_cambio",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  exchangeRate: number | null;

}
