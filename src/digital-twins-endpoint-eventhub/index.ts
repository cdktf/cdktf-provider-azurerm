// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}
  */
  readonly deadLetterStorageSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}
  */
  readonly eventhubPrimaryConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}
  */
  readonly eventhubSecondaryConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#timeouts DigitalTwinsEndpointEventhub#timeouts}
  */
  readonly timeouts?: DigitalTwinsEndpointEventhubTimeouts;
}
export interface DigitalTwinsEndpointEventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#create DigitalTwinsEndpointEventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#delete DigitalTwinsEndpointEventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#read DigitalTwinsEndpointEventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#update DigitalTwinsEndpointEventhub#update}
  */
  readonly update?: string;
}

export function digitalTwinsEndpointEventhubTimeoutsToTerraform(struct?: DigitalTwinsEndpointEventhubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function digitalTwinsEndpointEventhubTimeoutsToHclTerraform(struct?: DigitalTwinsEndpointEventhubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DigitalTwinsEndpointEventhubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DigitalTwinsEndpointEventhubTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinsEndpointEventhubTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub azurerm_digital_twins_endpoint_eventhub}
*/
export class DigitalTwinsEndpointEventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_digital_twins_endpoint_eventhub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DigitalTwinsEndpointEventhub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DigitalTwinsEndpointEventhub to import
  * @param importFromId The id of the existing DigitalTwinsEndpointEventhub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DigitalTwinsEndpointEventhub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_digital_twins_endpoint_eventhub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_endpoint_eventhub azurerm_digital_twins_endpoint_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsEndpointEventhubConfig
  */
  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deadLetterStorageSecret = config.deadLetterStorageSecret;
    this._digitalTwinsId = config.digitalTwinsId;
    this._eventhubPrimaryConnectionString = config.eventhubPrimaryConnectionString;
    this._eventhubSecondaryConnectionString = config.eventhubSecondaryConnectionString;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_storage_secret - computed: false, optional: true, required: false
  private _deadLetterStorageSecret?: string; 
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string) {
    this._deadLetterStorageSecret = value;
  }
  public resetDeadLetterStorageSecret() {
    this._deadLetterStorageSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterStorageSecretInput() {
    return this._deadLetterStorageSecret;
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
    return this._digitalTwinsId;
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
    return this._eventhubPrimaryConnectionString;
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
    return this._eventhubSecondaryConnectionString;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DigitalTwinsEndpointEventhubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DigitalTwinsEndpointEventhubTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: digitalTwinsEndpointEventhubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dead_letter_storage_secret: {
        value: cdktf.stringToHclTerraform(this._deadLetterStorageSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twins_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_primary_connection_string: {
        value: cdktf.stringToHclTerraform(this._eventhubPrimaryConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_secondary_connection_string: {
        value: cdktf.stringToHclTerraform(this._eventhubSecondaryConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: digitalTwinsEndpointEventhubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DigitalTwinsEndpointEventhubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
