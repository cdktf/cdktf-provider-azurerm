// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventgridConfig extends TerraformMetaArguments {
  readonly deadLetterStorageSecret?: string;
  readonly digitalTwinsId: string;
  readonly eventgridTopicEndpoint: string;
  readonly eventgridTopicPrimaryAccessKey: string;
  readonly eventgridTopicSecondaryAccessKey: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DigitalTwinsEndpointEventgridTimeouts;
}
export interface DigitalTwinsEndpointEventgridTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DigitalTwinsEndpointEventgrid extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointEventgridConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_eventgrid',
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
    this._eventgridTopicEndpoint = config.eventgridTopicEndpoint;
    this._eventgridTopicPrimaryAccessKey = config.eventgridTopicPrimaryAccessKey;
    this._eventgridTopicSecondaryAccessKey = config.eventgridTopicSecondaryAccessKey;
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

  // eventgrid_topic_endpoint - computed: false, optional: false, required: true
  private _eventgridTopicEndpoint: string;
  public get eventgridTopicEndpoint() {
    return this.getStringAttribute('eventgrid_topic_endpoint');
  }
  public set eventgridTopicEndpoint(value: string) {
    this._eventgridTopicEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicEndpointInput() {
    return this._eventgridTopicEndpoint
  }

  // eventgrid_topic_primary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicPrimaryAccessKey: string;
  public get eventgridTopicPrimaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_primary_access_key');
  }
  public set eventgridTopicPrimaryAccessKey(value: string) {
    this._eventgridTopicPrimaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicPrimaryAccessKeyInput() {
    return this._eventgridTopicPrimaryAccessKey
  }

  // eventgrid_topic_secondary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicSecondaryAccessKey: string;
  public get eventgridTopicSecondaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_secondary_access_key');
  }
  public set eventgridTopicSecondaryAccessKey(value: string) {
    this._eventgridTopicSecondaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicSecondaryAccessKeyInput() {
    return this._eventgridTopicSecondaryAccessKey
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
  private _timeouts?: DigitalTwinsEndpointEventgridTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DigitalTwinsEndpointEventgridTimeouts ) {
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
      dead_letter_storage_secret: this._deadLetterStorageSecret,
      digital_twins_id: this._digitalTwinsId,
      eventgrid_topic_endpoint: this._eventgridTopicEndpoint,
      eventgrid_topic_primary_access_key: this._eventgridTopicPrimaryAccessKey,
      eventgrid_topic_secondary_access_key: this._eventgridTopicSecondaryAccessKey,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
