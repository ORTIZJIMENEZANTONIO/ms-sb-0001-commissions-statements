import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@Entity("comer_comisionesxbien", { schema: "sera" })
export class ComerComissionxbGoodEntity {
  @Column("numeric", {
    primary: true,
    name: "id_comcalculada",
    precision: 10,
    scale: 0,
  })
  id: string;

  @Column("numeric", {
    primary: true,
    name: "id_evento",
    precision: 10,
    scale: 0,
  })
  eventId: string;

  @Column("numeric", {
    primary: true,
    name: "no_bien",
    precision: 10,
    scale: 0,
  })
  goodNumber: Number;

  @Column("numeric", { name: "monto_comision", precision: 24, scale: 14 })
  comisionAmount: Number;

  @Column("numeric", { name: "lote", precision: 10, scale: 0 })
  lot: Number;

  @Column("character varying", { name: "cvman", length: 8 })
  cvMan: string;

  @Column("numeric", { name: "venta", precision: 19, scale: 2 })
  sale: Number;

  @Column("character varying", {
    name: "comentarios",
    nullable: true,
    length: 1000,
  })
  comments: string | null;

  @Column("character varying", { name: "seprocesa", nullable: true, length: 1 })
  itsProcessed: string | null;

  @Column("numeric", {
    name: "venta_tc",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  tcSale: Number | null;
}
