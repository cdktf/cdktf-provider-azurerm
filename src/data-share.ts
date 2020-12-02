// https://www.terraform.io/docs/providers/azurerm/r/data_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataShareConfig extends TerraformMetaArguments {
  readonly accountId: string;
  readonly description?: string;
  readonly kind: string;
  readonly name: string;
  readonly terms?: string;
  /** snapshot_schedule block */
  readonly snapshotSchedule?: DataShareSnapshotSchedule[];
  /** timeouts block */
  readonly timeouts?: DataShareTimeouts;
}
export interface DataShareSnapshotSchedule {
  readonly name: string;
  readonly recurrence: string;
  readonly startTime: string;
}
export interface DataShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataShare extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataShareConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._kind = config.kind;
    this._name = config.name;
    this._terms = config.terms;
    this._snapshotSchedule = config.snapshotSchedule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // terms - computed: false, optional: true, required: false
  private _terms?: string;
  public get terms() {
    return this.getStringAttribute('terms');
  }
  public set terms(value: string ) {
    this._terms = value;
  }
  public resetTerms() {
    this._terms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms
  }

  // snapshot_schedule - computed: false, optional: true, required: false
  private _snapshotSchedule?: DataShareSnapshotSchedule[];
  public get snapshotSchedule() {
    return this.interpolationForAttribute('snapshot_schedule') as any;
  }
  public set snapshotSchedule(value: DataShareSnapshotSchedule[] ) {
    this._snapshotSchedule = value;
  }
  public resetSnapshotSchedule() {
    this._snapshotSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotScheduleInput() {
    return this._snapshotSchedule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataShareTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      description: this._description,
      kind: this._kind,
      name: this._name,
      terms: this._terms,
      snapshot_schedule: this._snapshotSchedule,
      timeouts: this._timeouts,
    };
  }
}
