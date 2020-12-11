// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventhubConfig extends cdktf.TerraformMetaArguments {
  readonly deadLetterStorageSecret?: string;
  readonly digitalTwinsId: string;
  readonly eventhubPrimaryConnectionString: string;
  readonly eventhubSecondaryConnectionString: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DigitalTwinsEndpointEventhubTimeouts;
}
export interface DigitalTwinsEndpointEventhubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function digitalTwinsEndpointEventhubTimeoutsToTerraform(struct?: DigitalTwinsEndpointEventhubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DigitalTwinsEndpointEventhub extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deadLetterStorageSecret = config.deadLetterStorageSecret;
    this._digitalTwinsId = config.digitalTwinsId;
    this._eventhubPrimaryConnectionString = config.eventhubPrimaryConnectionString;
    this._eventhubSecondaryConnectionString = config.eventhubSecondaryConnectionString;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_storage_secret - computed: false, optional: true, required: false
  private _deadLetterStorageSecret?: string;
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string ) {
    this._deadLetterStorageSecret = value;
  }
  public resetDeadLetterStorageSecret() {
    this._deadLetterStorageSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterStorageSecretInput() {
    return this._deadLetterStorageSecret
  }

  // digital_twins_id - computed: false, optional: false, required: true
  private _digitalTwinsId: string;
  public get digitalTwinsId() {
    return this.getStringAttribute('digital_twins_id');
  }
  public set digitalTwinsId(value: string) {
    this._digitalTwinsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinsIdInput() {
    return this._digitalTwinsId
  }

  // eventhub_primary_connection_string - computed: false, optional: false, required: true
  private _eventhubPrimaryConnectionString: string;
  public get eventhubPrimaryConnectionString() {
    return this.getStringAttribute('eventhub_primary_connection_string');
  }
  public set eventhubPrimaryConnectionString(value: string) {
    this._eventhubPrimaryConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubPrimaryConnectionStringInput() {
    return this._eventhubPrimaryConnectionString
  }

  // eventhub_secondary_connection_string - computed: false, optional: false, required: true
  private _eventhubSecondaryConnectionString: string;
  public get eventhubSecondaryConnectionString() {
    return this.getStringAttribute('eventhub_secondary_connection_string');
  }
  public set eventhubSecondaryConnectionString(value: string) {
    this._eventhubSecondaryConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubSecondaryConnectionStringInput() {
    return this._eventhubSecondaryConnectionString
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DigitalTwinsEndpointEventhubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DigitalTwinsEndpointEventhubTimeouts ) {
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
      dead_letter_storage_secret: cdktf.stringToTerraform(this._deadLetterStorageSecret),
      digital_twins_id: cdktf.stringToTerraform(this._digitalTwinsId),
      eventhub_primary_connection_string: cdktf.stringToTerraform(this._eventhubPrimaryConnectionString),
      eventhub_secondary_connection_string: cdktf.stringToTerraform(this._eventhubSecondaryConnectionString),
      name: cdktf.stringToTerraform(this._name),
      timeouts: digitalTwinsEndpointEventhubTimeoutsToTerraform(this._timeouts),
    };
  }
}
