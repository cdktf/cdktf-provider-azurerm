// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}
  */
  readonly deadLetterStorageSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}
  */
  readonly eventhubPrimaryConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}
  */
  readonly eventhubSecondaryConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#name DigitalTwinsEndpointEventhub#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#timeouts DigitalTwinsEndpointEventhub#timeouts}
  */
  readonly timeouts?: DigitalTwinsEndpointEventhubTimeouts;
}
export interface DigitalTwinsEndpointEventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#create DigitalTwinsEndpointEventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#delete DigitalTwinsEndpointEventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#read DigitalTwinsEndpointEventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html#update DigitalTwinsEndpointEventhub#update}
  */
  readonly update?: string;
}

function digitalTwinsEndpointEventhubTimeoutsToTerraform(struct?: DigitalTwinsEndpointEventhubTimeoutsOutputReference | DigitalTwinsEndpointEventhubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DigitalTwinsEndpointEventhubTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html azurerm_digital_twins_endpoint_eventhub}
*/
export class DigitalTwinsEndpointEventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_digital_twins_endpoint_eventhub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventhub.html azurerm_digital_twins_endpoint_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsEndpointEventhubConfig
  */
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
  private _deadLetterStorageSecret?: string | undefined; 
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string | undefined) {
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
  private _digitalTwinsId?: string; 
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
  private _eventhubPrimaryConnectionString?: string; 
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
  private _eventhubSecondaryConnectionString?: string; 
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
  private _name?: string; 
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
  private _timeouts?: DigitalTwinsEndpointEventhubTimeouts | undefined; 
  private __timeoutsOutput = new DigitalTwinsEndpointEventhubTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DigitalTwinsEndpointEventhubTimeouts | undefined) {
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
