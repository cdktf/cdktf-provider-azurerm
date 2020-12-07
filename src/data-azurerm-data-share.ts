// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataShareConfig extends cdktf.TerraformMetaArguments {
  readonly accountId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataShareTimeouts;
}
export class DataAzurermDataShareSnapshotSchedule extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurrence - computed: true, optional: false, required: false
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataAzurermDataShareTimeouts {
  readonly read?: string;
}

function dataAzurermDataShareTimeoutsToTerraform(struct?: DataAzurermDataShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermDataShare extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDataShareConfig) {
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
    this._name = config.name;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // snapshot_schedule - computed: true, optional: false, required: false
  public snapshotSchedule(index: string) {
    return new DataAzurermDataShareSnapshotSchedule(this, 'snapshot_schedule', index);
  }

  // terms - computed: true, optional: false, required: false
  public get terms() {
    return this.getStringAttribute('terms');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDataShareTimeouts ) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermDataShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
