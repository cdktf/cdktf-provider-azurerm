# `azurerm_eventgrid_event_subscription`

Refer to the Terraform Registory for docs: [`azurerm_eventgrid_event_subscription`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription).

# `eventgridEventSubscription` Submodule <a name="`eventgridEventSubscription` Submodule" id="@cdktf/provider-azurerm.eventgridEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridEventSubscription <a name="EventgridEventSubscription" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription azurerm_eventgrid_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscription;

EventgridEventSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
//  .advancedFilter(EventgridEventSubscriptionAdvancedFilter)
//  .advancedFilteringOnArraysEnabled(java.lang.Boolean)
//  .advancedFilteringOnArraysEnabled(IResolvable)
//  .azureFunctionEndpoint(EventgridEventSubscriptionAzureFunctionEndpoint)
//  .deadLetterIdentity(EventgridEventSubscriptionDeadLetterIdentity)
//  .deliveryIdentity(EventgridEventSubscriptionDeliveryIdentity)
//  .deliveryProperty(IResolvable)
//  .deliveryProperty(java.util.List<EventgridEventSubscriptionDeliveryProperty>)
//  .eventDeliverySchema(java.lang.String)
//  .eventhubEndpointId(java.lang.String)
//  .expirationTimeUtc(java.lang.String)
//  .hybridConnectionEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .includedEventTypes(java.util.List<java.lang.String>)
//  .labels(java.util.List<java.lang.String>)
//  .retryPolicy(EventgridEventSubscriptionRetryPolicy)
//  .serviceBusQueueEndpointId(java.lang.String)
//  .serviceBusTopicEndpointId(java.lang.String)
//  .storageBlobDeadLetterDestination(EventgridEventSubscriptionStorageBlobDeadLetterDestination)
//  .storageQueueEndpoint(EventgridEventSubscriptionStorageQueueEndpoint)
//  .subjectFilter(EventgridEventSubscriptionSubjectFilter)
//  .timeouts(EventgridEventSubscriptionTimeouts)
//  .webhookEndpoint(EventgridEventSubscriptionWebhookEndpoint)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.advancedFilter">advancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | advanced_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.advancedFilteringOnArraysEnabled">advancedFilteringOnArraysEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.azureFunctionEndpoint">azureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | azure_function_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deadLetterIdentity">deadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | dead_letter_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deliveryIdentity">deliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | delivery_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deliveryProperty">deliveryProperty</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>></code> | delivery_property block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.eventDeliverySchema">eventDeliverySchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.eventhubEndpointId">eventhubEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.expirationTimeUtc">expirationTimeUtc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.hybridConnectionEndpointId">hybridConnectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.includedEventTypes">includedEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.serviceBusQueueEndpointId">serviceBusQueueEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.serviceBusTopicEndpointId">serviceBusTopicEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.storageBlobDeadLetterDestination">storageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | storage_blob_dead_letter_destination block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.storageQueueEndpoint">storageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | storage_queue_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.subjectFilter">subjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | subject_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.webhookEndpoint">webhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | webhook_endpoint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}.

---

##### `advancedFilter`<sup>Optional</sup> <a name="advancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.advancedFilter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

advanced_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}

---

##### `advancedFilteringOnArraysEnabled`<sup>Optional</sup> <a name="advancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.advancedFilteringOnArraysEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}.

---

##### `azureFunctionEndpoint`<sup>Optional</sup> <a name="azureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.azureFunctionEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

azure_function_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}

---

##### `deadLetterIdentity`<sup>Optional</sup> <a name="deadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deadLetterIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

dead_letter_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}

---

##### `deliveryIdentity`<sup>Optional</sup> <a name="deliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deliveryIdentity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

delivery_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}

---

##### `deliveryProperty`<sup>Optional</sup> <a name="deliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.deliveryProperty"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>>

delivery_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}

---

##### `eventDeliverySchema`<sup>Optional</sup> <a name="eventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.eventDeliverySchema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}.

---

##### `eventhubEndpointId`<sup>Optional</sup> <a name="eventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.eventhubEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}.

---

##### `expirationTimeUtc`<sup>Optional</sup> <a name="expirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.expirationTimeUtc"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}.

---

##### `hybridConnectionEndpointId`<sup>Optional</sup> <a name="hybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.hybridConnectionEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedEventTypes`<sup>Optional</sup> <a name="includedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.includedEventTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}.

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}

---

##### `serviceBusQueueEndpointId`<sup>Optional</sup> <a name="serviceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.serviceBusQueueEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}.

---

##### `serviceBusTopicEndpointId`<sup>Optional</sup> <a name="serviceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.serviceBusTopicEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}.

---

##### `storageBlobDeadLetterDestination`<sup>Optional</sup> <a name="storageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.storageBlobDeadLetterDestination"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

storage_blob_dead_letter_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}

---

##### `storageQueueEndpoint`<sup>Optional</sup> <a name="storageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.storageQueueEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

storage_queue_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.subjectFilter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

subject_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}

---

##### `webhookEndpoint`<sup>Optional</sup> <a name="webhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.webhookEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

webhook_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter">putAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint">putAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity">putDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity">putDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty">putDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination">putStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint">putStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter">putSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint">putWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilter">resetAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilteringOnArraysEnabled">resetAdvancedFilteringOnArraysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAzureFunctionEndpoint">resetAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeadLetterIdentity">resetDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryIdentity">resetDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryProperty">resetDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventDeliverySchema">resetEventDeliverySchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventhubEndpointId">resetEventhubEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetExpirationTimeUtc">resetExpirationTimeUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetHybridConnectionEndpointId">resetHybridConnectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetIncludedEventTypes">resetIncludedEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusQueueEndpointId">resetServiceBusQueueEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusTopicEndpointId">resetServiceBusTopicEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageBlobDeadLetterDestination">resetStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageQueueEndpoint">resetStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetSubjectFilter">resetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetWebhookEndpoint">resetWebhookEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvancedFilter` <a name="putAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter"></a>

```java
public void putAdvancedFilter(EventgridEventSubscriptionAdvancedFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `putAzureFunctionEndpoint` <a name="putAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint"></a>

```java
public void putAzureFunctionEndpoint(EventgridEventSubscriptionAzureFunctionEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `putDeadLetterIdentity` <a name="putDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity"></a>

```java
public void putDeadLetterIdentity(EventgridEventSubscriptionDeadLetterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `putDeliveryIdentity` <a name="putDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity"></a>

```java
public void putDeliveryIdentity(EventgridEventSubscriptionDeliveryIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `putDeliveryProperty` <a name="putDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty"></a>

```java
public void putDeliveryProperty(IResolvable OR java.util.List<EventgridEventSubscriptionDeliveryProperty> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy"></a>

```java
public void putRetryPolicy(EventgridEventSubscriptionRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `putStorageBlobDeadLetterDestination` <a name="putStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination"></a>

```java
public void putStorageBlobDeadLetterDestination(EventgridEventSubscriptionStorageBlobDeadLetterDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `putStorageQueueEndpoint` <a name="putStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint"></a>

```java
public void putStorageQueueEndpoint(EventgridEventSubscriptionStorageQueueEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `putSubjectFilter` <a name="putSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter"></a>

```java
public void putSubjectFilter(EventgridEventSubscriptionSubjectFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts"></a>

```java
public void putTimeouts(EventgridEventSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

---

##### `putWebhookEndpoint` <a name="putWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint"></a>

```java
public void putWebhookEndpoint(EventgridEventSubscriptionWebhookEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `resetAdvancedFilter` <a name="resetAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilter"></a>

```java
public void resetAdvancedFilter()
```

##### `resetAdvancedFilteringOnArraysEnabled` <a name="resetAdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilteringOnArraysEnabled"></a>

```java
public void resetAdvancedFilteringOnArraysEnabled()
```

##### `resetAzureFunctionEndpoint` <a name="resetAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAzureFunctionEndpoint"></a>

```java
public void resetAzureFunctionEndpoint()
```

##### `resetDeadLetterIdentity` <a name="resetDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeadLetterIdentity"></a>

```java
public void resetDeadLetterIdentity()
```

##### `resetDeliveryIdentity` <a name="resetDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryIdentity"></a>

```java
public void resetDeliveryIdentity()
```

##### `resetDeliveryProperty` <a name="resetDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryProperty"></a>

```java
public void resetDeliveryProperty()
```

##### `resetEventDeliverySchema` <a name="resetEventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventDeliverySchema"></a>

```java
public void resetEventDeliverySchema()
```

##### `resetEventhubEndpointId` <a name="resetEventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventhubEndpointId"></a>

```java
public void resetEventhubEndpointId()
```

##### `resetExpirationTimeUtc` <a name="resetExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetExpirationTimeUtc"></a>

```java
public void resetExpirationTimeUtc()
```

##### `resetHybridConnectionEndpointId` <a name="resetHybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetHybridConnectionEndpointId"></a>

```java
public void resetHybridConnectionEndpointId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetIncludedEventTypes` <a name="resetIncludedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetIncludedEventTypes"></a>

```java
public void resetIncludedEventTypes()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetServiceBusQueueEndpointId` <a name="resetServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusQueueEndpointId"></a>

```java
public void resetServiceBusQueueEndpointId()
```

##### `resetServiceBusTopicEndpointId` <a name="resetServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusTopicEndpointId"></a>

```java
public void resetServiceBusTopicEndpointId()
```

##### `resetStorageBlobDeadLetterDestination` <a name="resetStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageBlobDeadLetterDestination"></a>

```java
public void resetStorageBlobDeadLetterDestination()
```

##### `resetStorageQueueEndpoint` <a name="resetStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageQueueEndpoint"></a>

```java
public void resetStorageQueueEndpoint()
```

##### `resetSubjectFilter` <a name="resetSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetSubjectFilter"></a>

```java
public void resetSubjectFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebhookEndpoint` <a name="resetWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetWebhookEndpoint"></a>

```java
public void resetWebhookEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscription;

EventgridEventSubscription.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscription;

EventgridEventSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscription;

EventgridEventSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilter">advancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference">EventgridEventSubscriptionAdvancedFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpoint">azureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference">EventgridEventSubscriptionAzureFunctionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentity">deadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference">EventgridEventSubscriptionDeadLetterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentity">deliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference">EventgridEventSubscriptionDeliveryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryProperty">deliveryProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList">EventgridEventSubscriptionDeliveryPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference">EventgridEventSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestination">storageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpoint">storageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference">EventgridEventSubscriptionStorageQueueEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilter">subjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference">EventgridEventSubscriptionSubjectFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference">EventgridEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpoint">webhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference">EventgridEventSubscriptionWebhookEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput">advancedFilteringOnArraysEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput">advancedFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput">azureFunctionEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput">deadLetterIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput">deliveryIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput">deliveryPropertyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput">eventDeliverySchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput">eventhubEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput">expirationTimeUtcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput">hybridConnectionEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput">includedEventTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput">serviceBusQueueEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput">serviceBusTopicEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput">storageBlobDeadLetterDestinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput">storageQueueEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput">subjectFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput">webhookEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled">advancedFilteringOnArraysEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema">eventDeliverySchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId">eventhubEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc">expirationTimeUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId">hybridConnectionEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes">includedEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId">serviceBusQueueEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId">serviceBusTopicEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedFilter`<sup>Required</sup> <a name="advancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilter"></a>

```java
public EventgridEventSubscriptionAdvancedFilterOutputReference getAdvancedFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference">EventgridEventSubscriptionAdvancedFilterOutputReference</a>

---

##### `azureFunctionEndpoint`<sup>Required</sup> <a name="azureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpoint"></a>

```java
public EventgridEventSubscriptionAzureFunctionEndpointOutputReference getAzureFunctionEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference">EventgridEventSubscriptionAzureFunctionEndpointOutputReference</a>

---

##### `deadLetterIdentity`<sup>Required</sup> <a name="deadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentity"></a>

```java
public EventgridEventSubscriptionDeadLetterIdentityOutputReference getDeadLetterIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference">EventgridEventSubscriptionDeadLetterIdentityOutputReference</a>

---

##### `deliveryIdentity`<sup>Required</sup> <a name="deliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentity"></a>

```java
public EventgridEventSubscriptionDeliveryIdentityOutputReference getDeliveryIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference">EventgridEventSubscriptionDeliveryIdentityOutputReference</a>

---

##### `deliveryProperty`<sup>Required</sup> <a name="deliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryProperty"></a>

```java
public EventgridEventSubscriptionDeliveryPropertyList getDeliveryProperty();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList">EventgridEventSubscriptionDeliveryPropertyList</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicy"></a>

```java
public EventgridEventSubscriptionRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference">EventgridEventSubscriptionRetryPolicyOutputReference</a>

---

##### `storageBlobDeadLetterDestination`<sup>Required</sup> <a name="storageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestination"></a>

```java
public EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference getStorageBlobDeadLetterDestination();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a>

---

##### `storageQueueEndpoint`<sup>Required</sup> <a name="storageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpoint"></a>

```java
public EventgridEventSubscriptionStorageQueueEndpointOutputReference getStorageQueueEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference">EventgridEventSubscriptionStorageQueueEndpointOutputReference</a>

---

##### `subjectFilter`<sup>Required</sup> <a name="subjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilter"></a>

```java
public EventgridEventSubscriptionSubjectFilterOutputReference getSubjectFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference">EventgridEventSubscriptionSubjectFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeouts"></a>

```java
public EventgridEventSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference">EventgridEventSubscriptionTimeoutsOutputReference</a>

---

##### `webhookEndpoint`<sup>Required</sup> <a name="webhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpoint"></a>

```java
public EventgridEventSubscriptionWebhookEndpointOutputReference getWebhookEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference">EventgridEventSubscriptionWebhookEndpointOutputReference</a>

---

##### `advancedFilteringOnArraysEnabledInput`<sup>Optional</sup> <a name="advancedFilteringOnArraysEnabledInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput"></a>

```java
public java.lang.Object getAdvancedFilteringOnArraysEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `advancedFilterInput`<sup>Optional</sup> <a name="advancedFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput"></a>

```java
public EventgridEventSubscriptionAdvancedFilter getAdvancedFilterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `azureFunctionEndpointInput`<sup>Optional</sup> <a name="azureFunctionEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput"></a>

```java
public EventgridEventSubscriptionAzureFunctionEndpoint getAzureFunctionEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `deadLetterIdentityInput`<sup>Optional</sup> <a name="deadLetterIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput"></a>

```java
public EventgridEventSubscriptionDeadLetterIdentity getDeadLetterIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `deliveryIdentityInput`<sup>Optional</sup> <a name="deliveryIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput"></a>

```java
public EventgridEventSubscriptionDeliveryIdentity getDeliveryIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `deliveryPropertyInput`<sup>Optional</sup> <a name="deliveryPropertyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput"></a>

```java
public java.lang.Object getDeliveryPropertyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>>

---

##### `eventDeliverySchemaInput`<sup>Optional</sup> <a name="eventDeliverySchemaInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput"></a>

```java
public java.lang.String getEventDeliverySchemaInput();
```

- *Type:* java.lang.String

---

##### `eventhubEndpointIdInput`<sup>Optional</sup> <a name="eventhubEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput"></a>

```java
public java.lang.String getEventhubEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `expirationTimeUtcInput`<sup>Optional</sup> <a name="expirationTimeUtcInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput"></a>

```java
public java.lang.String getExpirationTimeUtcInput();
```

- *Type:* java.lang.String

---

##### `hybridConnectionEndpointIdInput`<sup>Optional</sup> <a name="hybridConnectionEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput"></a>

```java
public java.lang.String getHybridConnectionEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includedEventTypesInput`<sup>Optional</sup> <a name="includedEventTypesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedEventTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput"></a>

```java
public EventgridEventSubscriptionRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceBusQueueEndpointIdInput`<sup>Optional</sup> <a name="serviceBusQueueEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput"></a>

```java
public java.lang.String getServiceBusQueueEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `serviceBusTopicEndpointIdInput`<sup>Optional</sup> <a name="serviceBusTopicEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput"></a>

```java
public java.lang.String getServiceBusTopicEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `storageBlobDeadLetterDestinationInput`<sup>Optional</sup> <a name="storageBlobDeadLetterDestinationInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput"></a>

```java
public EventgridEventSubscriptionStorageBlobDeadLetterDestination getStorageBlobDeadLetterDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `storageQueueEndpointInput`<sup>Optional</sup> <a name="storageQueueEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput"></a>

```java
public EventgridEventSubscriptionStorageQueueEndpoint getStorageQueueEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `subjectFilterInput`<sup>Optional</sup> <a name="subjectFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput"></a>

```java
public EventgridEventSubscriptionSubjectFilter getSubjectFilterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `webhookEndpointInput`<sup>Optional</sup> <a name="webhookEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput"></a>

```java
public EventgridEventSubscriptionWebhookEndpoint getWebhookEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `advancedFilteringOnArraysEnabled`<sup>Required</sup> <a name="advancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled"></a>

```java
public java.lang.Object getAdvancedFilteringOnArraysEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventDeliverySchema`<sup>Required</sup> <a name="eventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema"></a>

```java
public java.lang.String getEventDeliverySchema();
```

- *Type:* java.lang.String

---

##### `eventhubEndpointId`<sup>Required</sup> <a name="eventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId"></a>

```java
public java.lang.String getEventhubEndpointId();
```

- *Type:* java.lang.String

---

##### `expirationTimeUtc`<sup>Required</sup> <a name="expirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc"></a>

```java
public java.lang.String getExpirationTimeUtc();
```

- *Type:* java.lang.String

---

##### `hybridConnectionEndpointId`<sup>Required</sup> <a name="hybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId"></a>

```java
public java.lang.String getHybridConnectionEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includedEventTypes`<sup>Required</sup> <a name="includedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes"></a>

```java
public java.util.List<java.lang.String> getIncludedEventTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceBusQueueEndpointId`<sup>Required</sup> <a name="serviceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId"></a>

```java
public java.lang.String getServiceBusQueueEndpointId();
```

- *Type:* java.lang.String

---

##### `serviceBusTopicEndpointId`<sup>Required</sup> <a name="serviceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId"></a>

```java
public java.lang.String getServiceBusTopicEndpointId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridEventSubscriptionAdvancedFilter <a name="EventgridEventSubscriptionAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilter;

EventgridEventSubscriptionAdvancedFilter.builder()
//  .boolEquals(IResolvable)
//  .boolEquals(java.util.List<EventgridEventSubscriptionAdvancedFilterBoolEquals>)
//  .isNotNull(IResolvable)
//  .isNotNull(java.util.List<EventgridEventSubscriptionAdvancedFilterIsNotNull>)
//  .isNullOrUndefined(IResolvable)
//  .isNullOrUndefined(java.util.List<EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined>)
//  .numberGreaterThan(IResolvable)
//  .numberGreaterThan(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberGreaterThan>)
//  .numberGreaterThanOrEquals(IResolvable)
//  .numberGreaterThanOrEquals(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals>)
//  .numberIn(IResolvable)
//  .numberIn(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberIn>)
//  .numberInRange(IResolvable)
//  .numberInRange(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberInRange>)
//  .numberLessThan(IResolvable)
//  .numberLessThan(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberLessThan>)
//  .numberLessThanOrEquals(IResolvable)
//  .numberLessThanOrEquals(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals>)
//  .numberNotIn(IResolvable)
//  .numberNotIn(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberNotIn>)
//  .numberNotInRange(IResolvable)
//  .numberNotInRange(java.util.List<EventgridEventSubscriptionAdvancedFilterNumberNotInRange>)
//  .stringBeginsWith(IResolvable)
//  .stringBeginsWith(java.util.List<EventgridEventSubscriptionAdvancedFilterStringBeginsWith>)
//  .stringContains(IResolvable)
//  .stringContains(java.util.List<EventgridEventSubscriptionAdvancedFilterStringContains>)
//  .stringEndsWith(IResolvable)
//  .stringEndsWith(java.util.List<EventgridEventSubscriptionAdvancedFilterStringEndsWith>)
//  .stringIn(IResolvable)
//  .stringIn(java.util.List<EventgridEventSubscriptionAdvancedFilterStringIn>)
//  .stringNotBeginsWith(IResolvable)
//  .stringNotBeginsWith(java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith>)
//  .stringNotContains(IResolvable)
//  .stringNotContains(java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotContains>)
//  .stringNotEndsWith(IResolvable)
//  .stringNotEndsWith(java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotEndsWith>)
//  .stringNotIn(IResolvable)
//  .stringNotIn(java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotIn>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals">boolEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>></code> | bool_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull">isNotNull</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>></code> | is_not_null block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined">isNullOrUndefined</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>></code> | is_null_or_undefined block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan">numberGreaterThan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>></code> | number_greater_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals">numberGreaterThanOrEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>></code> | number_greater_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn">numberIn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>></code> | number_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange">numberInRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>></code> | number_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan">numberLessThan</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>></code> | number_less_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals">numberLessThanOrEquals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>></code> | number_less_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn">numberNotIn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>></code> | number_not_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange">numberNotInRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>></code> | number_not_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith">stringBeginsWith</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>></code> | string_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains">stringContains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>></code> | string_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith">stringEndsWith</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>></code> | string_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn">stringIn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>></code> | string_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith">stringNotBeginsWith</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>></code> | string_not_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains">stringNotContains</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>></code> | string_not_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith">stringNotEndsWith</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>></code> | string_not_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn">stringNotIn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>></code> | string_not_in block. |

---

##### `boolEquals`<sup>Optional</sup> <a name="boolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals"></a>

```java
public java.lang.Object getBoolEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>>

bool_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#bool_equals EventgridEventSubscription#bool_equals}

---

##### `isNotNull`<sup>Optional</sup> <a name="isNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull"></a>

```java
public java.lang.Object getIsNotNull();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>>

is_not_null block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#is_not_null EventgridEventSubscription#is_not_null}

---

##### `isNullOrUndefined`<sup>Optional</sup> <a name="isNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined"></a>

```java
public java.lang.Object getIsNullOrUndefined();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>>

is_null_or_undefined block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}

---

##### `numberGreaterThan`<sup>Optional</sup> <a name="numberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan"></a>

```java
public java.lang.Object getNumberGreaterThan();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>>

number_greater_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_greater_than EventgridEventSubscription#number_greater_than}

---

##### `numberGreaterThanOrEquals`<sup>Optional</sup> <a name="numberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals"></a>

```java
public java.lang.Object getNumberGreaterThanOrEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>>

number_greater_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}

---

##### `numberIn`<sup>Optional</sup> <a name="numberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn"></a>

```java
public java.lang.Object getNumberIn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>>

number_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_in EventgridEventSubscription#number_in}

---

##### `numberInRange`<sup>Optional</sup> <a name="numberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange"></a>

```java
public java.lang.Object getNumberInRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>>

number_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_in_range EventgridEventSubscription#number_in_range}

---

##### `numberLessThan`<sup>Optional</sup> <a name="numberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan"></a>

```java
public java.lang.Object getNumberLessThan();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>>

number_less_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_less_than EventgridEventSubscription#number_less_than}

---

##### `numberLessThanOrEquals`<sup>Optional</sup> <a name="numberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals"></a>

```java
public java.lang.Object getNumberLessThanOrEquals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>>

number_less_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}

---

##### `numberNotIn`<sup>Optional</sup> <a name="numberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn"></a>

```java
public java.lang.Object getNumberNotIn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>>

number_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_not_in EventgridEventSubscription#number_not_in}

---

##### `numberNotInRange`<sup>Optional</sup> <a name="numberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange"></a>

```java
public java.lang.Object getNumberNotInRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>>

number_not_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#number_not_in_range EventgridEventSubscription#number_not_in_range}

---

##### `stringBeginsWith`<sup>Optional</sup> <a name="stringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith"></a>

```java
public java.lang.Object getStringBeginsWith();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>>

string_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_begins_with EventgridEventSubscription#string_begins_with}

---

##### `stringContains`<sup>Optional</sup> <a name="stringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains"></a>

```java
public java.lang.Object getStringContains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>>

string_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_contains EventgridEventSubscription#string_contains}

---

##### `stringEndsWith`<sup>Optional</sup> <a name="stringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith"></a>

```java
public java.lang.Object getStringEndsWith();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>>

string_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_ends_with EventgridEventSubscription#string_ends_with}

---

##### `stringIn`<sup>Optional</sup> <a name="stringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn"></a>

```java
public java.lang.Object getStringIn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>>

string_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_in EventgridEventSubscription#string_in}

---

##### `stringNotBeginsWith`<sup>Optional</sup> <a name="stringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith"></a>

```java
public java.lang.Object getStringNotBeginsWith();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>>

string_not_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_not_begins_with EventgridEventSubscription#string_not_begins_with}

---

##### `stringNotContains`<sup>Optional</sup> <a name="stringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains"></a>

```java
public java.lang.Object getStringNotContains();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>>

string_not_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_not_contains EventgridEventSubscription#string_not_contains}

---

##### `stringNotEndsWith`<sup>Optional</sup> <a name="stringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith"></a>

```java
public java.lang.Object getStringNotEndsWith();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>>

string_not_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_not_ends_with EventgridEventSubscription#string_not_ends_with}

---

##### `stringNotIn`<sup>Optional</sup> <a name="stringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn"></a>

```java
public java.lang.Object getStringNotIn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>>

string_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#string_not_in EventgridEventSubscription#string_not_in}

---

### EventgridEventSubscriptionAdvancedFilterBoolEquals <a name="EventgridEventSubscriptionAdvancedFilterBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterBoolEquals;

EventgridEventSubscriptionAdvancedFilterBoolEquals.builder()
    .key(java.lang.String)
    .value(java.lang.Boolean)
    .value(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterIsNotNull <a name="EventgridEventSubscriptionAdvancedFilterIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNotNull;

EventgridEventSubscriptionAdvancedFilterIsNotNull.builder()
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined;

EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.builder()
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThan <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan;

EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.builder()
    .key(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals;

EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.builder()
    .key(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberIn <a name="EventgridEventSubscriptionAdvancedFilterNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberIn;

EventgridEventSubscriptionAdvancedFilterNumberIn.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberInRange;

EventgridEventSubscriptionAdvancedFilterNumberInRange.builder()
    .key(java.lang.String)
    .values(IResolvable)
    .values(java.util.List<java.util.List<java.lang.Number>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThan <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan;

EventgridEventSubscriptionAdvancedFilterNumberLessThan.builder()
    .key(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals;

EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.builder()
    .key(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotIn <a name="EventgridEventSubscriptionAdvancedFilterNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn;

EventgridEventSubscriptionAdvancedFilterNumberNotIn.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange;

EventgridEventSubscriptionAdvancedFilterNumberNotInRange.builder()
    .key(java.lang.String)
    .values(IResolvable)
    .values(java.util.List<java.util.List<java.lang.Number>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith;

EventgridEventSubscriptionAdvancedFilterStringBeginsWith.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringContains <a name="EventgridEventSubscriptionAdvancedFilterStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringContains;

EventgridEventSubscriptionAdvancedFilterStringContains.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith;

EventgridEventSubscriptionAdvancedFilterStringEndsWith.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringIn <a name="EventgridEventSubscriptionAdvancedFilterStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringIn;

EventgridEventSubscriptionAdvancedFilterStringIn.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith;

EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotContains <a name="EventgridEventSubscriptionAdvancedFilterStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotContains;

EventgridEventSubscriptionAdvancedFilterStringNotContains.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith;

EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotIn <a name="EventgridEventSubscriptionAdvancedFilterStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotIn;

EventgridEventSubscriptionAdvancedFilterStringNotIn.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAzureFunctionEndpoint <a name="EventgridEventSubscriptionAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAzureFunctionEndpoint;

EventgridEventSubscriptionAzureFunctionEndpoint.builder()
    .functionId(java.lang.String)
//  .maxEventsPerBatch(java.lang.Number)
//  .preferredBatchSizeInKilobytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}.

---

##### `maxEventsPerBatch`<sup>Optional</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch"></a>

```java
public java.lang.Number getMaxEventsPerBatch();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `preferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

### EventgridEventSubscriptionConfig <a name="EventgridEventSubscriptionConfig" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionConfig;

EventgridEventSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
//  .advancedFilter(EventgridEventSubscriptionAdvancedFilter)
//  .advancedFilteringOnArraysEnabled(java.lang.Boolean)
//  .advancedFilteringOnArraysEnabled(IResolvable)
//  .azureFunctionEndpoint(EventgridEventSubscriptionAzureFunctionEndpoint)
//  .deadLetterIdentity(EventgridEventSubscriptionDeadLetterIdentity)
//  .deliveryIdentity(EventgridEventSubscriptionDeliveryIdentity)
//  .deliveryProperty(IResolvable)
//  .deliveryProperty(java.util.List<EventgridEventSubscriptionDeliveryProperty>)
//  .eventDeliverySchema(java.lang.String)
//  .eventhubEndpointId(java.lang.String)
//  .expirationTimeUtc(java.lang.String)
//  .hybridConnectionEndpointId(java.lang.String)
//  .id(java.lang.String)
//  .includedEventTypes(java.util.List<java.lang.String>)
//  .labels(java.util.List<java.lang.String>)
//  .retryPolicy(EventgridEventSubscriptionRetryPolicy)
//  .serviceBusQueueEndpointId(java.lang.String)
//  .serviceBusTopicEndpointId(java.lang.String)
//  .storageBlobDeadLetterDestination(EventgridEventSubscriptionStorageBlobDeadLetterDestination)
//  .storageQueueEndpoint(EventgridEventSubscriptionStorageQueueEndpoint)
//  .subjectFilter(EventgridEventSubscriptionSubjectFilter)
//  .timeouts(EventgridEventSubscriptionTimeouts)
//  .webhookEndpoint(EventgridEventSubscriptionWebhookEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter">advancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | advanced_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled">advancedFilteringOnArraysEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint">azureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | azure_function_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity">deadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | dead_letter_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity">deliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | delivery_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty">deliveryProperty</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>></code> | delivery_property block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema">eventDeliverySchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId">eventhubEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc">expirationTimeUtc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId">hybridConnectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes">includedEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId">serviceBusQueueEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId">serviceBusTopicEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination">storageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | storage_blob_dead_letter_destination block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint">storageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | storage_queue_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter">subjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | subject_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint">webhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | webhook_endpoint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}.

---

##### `advancedFilter`<sup>Optional</sup> <a name="advancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter"></a>

```java
public EventgridEventSubscriptionAdvancedFilter getAdvancedFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

advanced_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}

---

##### `advancedFilteringOnArraysEnabled`<sup>Optional</sup> <a name="advancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled"></a>

```java
public java.lang.Object getAdvancedFilteringOnArraysEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}.

---

##### `azureFunctionEndpoint`<sup>Optional</sup> <a name="azureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint"></a>

```java
public EventgridEventSubscriptionAzureFunctionEndpoint getAzureFunctionEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

azure_function_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}

---

##### `deadLetterIdentity`<sup>Optional</sup> <a name="deadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity"></a>

```java
public EventgridEventSubscriptionDeadLetterIdentity getDeadLetterIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

dead_letter_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}

---

##### `deliveryIdentity`<sup>Optional</sup> <a name="deliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity"></a>

```java
public EventgridEventSubscriptionDeliveryIdentity getDeliveryIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

delivery_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}

---

##### `deliveryProperty`<sup>Optional</sup> <a name="deliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty"></a>

```java
public java.lang.Object getDeliveryProperty();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>>

delivery_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}

---

##### `eventDeliverySchema`<sup>Optional</sup> <a name="eventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema"></a>

```java
public java.lang.String getEventDeliverySchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}.

---

##### `eventhubEndpointId`<sup>Optional</sup> <a name="eventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId"></a>

```java
public java.lang.String getEventhubEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}.

---

##### `expirationTimeUtc`<sup>Optional</sup> <a name="expirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc"></a>

```java
public java.lang.String getExpirationTimeUtc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}.

---

##### `hybridConnectionEndpointId`<sup>Optional</sup> <a name="hybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId"></a>

```java
public java.lang.String getHybridConnectionEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedEventTypes`<sup>Optional</sup> <a name="includedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes"></a>

```java
public java.util.List<java.lang.String> getIncludedEventTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}.

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy"></a>

```java
public EventgridEventSubscriptionRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}

---

##### `serviceBusQueueEndpointId`<sup>Optional</sup> <a name="serviceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId"></a>

```java
public java.lang.String getServiceBusQueueEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}.

---

##### `serviceBusTopicEndpointId`<sup>Optional</sup> <a name="serviceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId"></a>

```java
public java.lang.String getServiceBusTopicEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}.

---

##### `storageBlobDeadLetterDestination`<sup>Optional</sup> <a name="storageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination"></a>

```java
public EventgridEventSubscriptionStorageBlobDeadLetterDestination getStorageBlobDeadLetterDestination();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

storage_blob_dead_letter_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}

---

##### `storageQueueEndpoint`<sup>Optional</sup> <a name="storageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint"></a>

```java
public EventgridEventSubscriptionStorageQueueEndpoint getStorageQueueEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

storage_queue_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter"></a>

```java
public EventgridEventSubscriptionSubjectFilter getSubjectFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

subject_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts"></a>

```java
public EventgridEventSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}

---

##### `webhookEndpoint`<sup>Optional</sup> <a name="webhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint"></a>

```java
public EventgridEventSubscriptionWebhookEndpoint getWebhookEndpoint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

webhook_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}

---

### EventgridEventSubscriptionDeadLetterIdentity <a name="EventgridEventSubscriptionDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeadLetterIdentity;

EventgridEventSubscriptionDeadLetterIdentity.builder()
    .type(java.lang.String)
//  .userAssignedIdentity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `userAssignedIdentity`<sup>Optional</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity"></a>

```java
public java.lang.String getUserAssignedIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryIdentity <a name="EventgridEventSubscriptionDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeliveryIdentity;

EventgridEventSubscriptionDeliveryIdentity.builder()
    .type(java.lang.String)
//  .userAssignedIdentity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `userAssignedIdentity`<sup>Optional</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity"></a>

```java
public java.lang.String getUserAssignedIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryProperty <a name="EventgridEventSubscriptionDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeliveryProperty;

EventgridEventSubscriptionDeliveryProperty.builder()
    .headerName(java.lang.String)
    .type(java.lang.String)
//  .secret(java.lang.Boolean)
//  .secret(IResolvable)
//  .sourceField(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret">secret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField">sourceField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}.

---

##### `sourceField`<sup>Optional</sup> <a name="sourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField"></a>

```java
public java.lang.String getSourceField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionRetryPolicy <a name="EventgridEventSubscriptionRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionRetryPolicy;

EventgridEventSubscriptionRetryPolicy.builder()
    .eventTimeToLive(java.lang.Number)
    .maxDeliveryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive">eventTimeToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}. |

---

##### `eventTimeToLive`<sup>Required</sup> <a name="eventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive"></a>

```java
public java.lang.Number getEventTimeToLive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}.

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}.

---

### EventgridEventSubscriptionStorageBlobDeadLetterDestination <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination;

EventgridEventSubscriptionStorageBlobDeadLetterDestination.builder()
    .storageAccountId(java.lang.String)
    .storageBlobContainerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName">storageBlobContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}. |

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `storageBlobContainerName`<sup>Required</sup> <a name="storageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName"></a>

```java
public java.lang.String getStorageBlobContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}.

---

### EventgridEventSubscriptionStorageQueueEndpoint <a name="EventgridEventSubscriptionStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionStorageQueueEndpoint;

EventgridEventSubscriptionStorageQueueEndpoint.builder()
    .queueName(java.lang.String)
    .storageAccountId(java.lang.String)
//  .queueMessageTimeToLiveInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName">queueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds">queueMessageTimeToLiveInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `queueMessageTimeToLiveInSeconds`<sup>Optional</sup> <a name="queueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds"></a>

```java
public java.lang.Number getQueueMessageTimeToLiveInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}.

---

### EventgridEventSubscriptionSubjectFilter <a name="EventgridEventSubscriptionSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionSubjectFilter;

EventgridEventSubscriptionSubjectFilter.builder()
//  .caseSensitive(java.lang.Boolean)
//  .caseSensitive(IResolvable)
//  .subjectBeginsWith(java.lang.String)
//  .subjectEndsWith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive">caseSensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith">subjectEndsWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}. |

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive"></a>

```java
public java.lang.Object getCaseSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}.

---

##### `subjectBeginsWith`<sup>Optional</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith"></a>

```java
public java.lang.String getSubjectBeginsWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}.

---

##### `subjectEndsWith`<sup>Optional</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith"></a>

```java
public java.lang.String getSubjectEndsWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}.

---

### EventgridEventSubscriptionTimeouts <a name="EventgridEventSubscriptionTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionTimeouts;

EventgridEventSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}.

---

### EventgridEventSubscriptionWebhookEndpoint <a name="EventgridEventSubscriptionWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionWebhookEndpoint;

EventgridEventSubscriptionWebhookEndpoint.builder()
    .url(java.lang.String)
//  .activeDirectoryAppIdOrUri(java.lang.String)
//  .activeDirectoryTenantId(java.lang.String)
//  .maxEventsPerBatch(java.lang.Number)
//  .preferredBatchSizeInKilobytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri">activeDirectoryAppIdOrUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId">activeDirectoryTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}.

---

##### `activeDirectoryAppIdOrUri`<sup>Optional</sup> <a name="activeDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri"></a>

```java
public java.lang.String getActiveDirectoryAppIdOrUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}.

---

##### `activeDirectoryTenantId`<sup>Optional</sup> <a name="activeDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId"></a>

```java
public java.lang.String getActiveDirectoryTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}.

---

##### `maxEventsPerBatch`<sup>Optional</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch"></a>

```java
public java.lang.Number getMaxEventsPerBatch();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `preferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridEventSubscriptionAdvancedFilterBoolEqualsList <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList;

new EventgridEventSubscriptionAdvancedFilterBoolEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>>

---


### EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference;

new EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullList <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList;

new EventgridEventSubscriptionAdvancedFilterIsNotNullList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>>

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference;

new EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList;

new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>>

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference;

new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberInList <a name="EventgridEventSubscriptionAdvancedFilterNumberInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberInList;

new EventgridEventSubscriptionAdvancedFilterNumberInList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberInOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList;

new EventgridEventSubscriptionAdvancedFilterNumberInRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput">valuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput"></a>

```java
public java.lang.Object getValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList;

new EventgridEventSubscriptionAdvancedFilterNumberNotInList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList;

new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>>

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference;

new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput">valuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput"></a>

```java
public java.lang.Object getValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.Number>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterOutputReference <a name="EventgridEventSubscriptionAdvancedFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterOutputReference;

new EventgridEventSubscriptionAdvancedFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals">putBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull">putIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined">putIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan">putNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals">putNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn">putNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange">putNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan">putNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals">putNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn">putNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange">putNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith">putStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains">putStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith">putStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn">putStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith">putStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains">putStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith">putStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn">putStringNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals">resetBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull">resetIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined">resetIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan">resetNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals">resetNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberIn">resetNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange">resetNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan">resetNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals">resetNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn">resetNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange">resetNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith">resetStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringContains">resetStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith">resetStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringIn">resetStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith">resetStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains">resetStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith">resetStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn">resetStringNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoolEquals` <a name="putBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals"></a>

```java
public void putBoolEquals(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterBoolEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>>

---

##### `putIsNotNull` <a name="putIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull"></a>

```java
public void putIsNotNull(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterIsNotNull> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>>

---

##### `putIsNullOrUndefined` <a name="putIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined"></a>

```java
public void putIsNullOrUndefined(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>>

---

##### `putNumberGreaterThan` <a name="putNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan"></a>

```java
public void putNumberGreaterThan(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberGreaterThan> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>>

---

##### `putNumberGreaterThanOrEquals` <a name="putNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals"></a>

```java
public void putNumberGreaterThanOrEquals(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>>

---

##### `putNumberIn` <a name="putNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn"></a>

```java
public void putNumberIn(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberIn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>>

---

##### `putNumberInRange` <a name="putNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange"></a>

```java
public void putNumberInRange(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberInRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>>

---

##### `putNumberLessThan` <a name="putNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan"></a>

```java
public void putNumberLessThan(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberLessThan> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>>

---

##### `putNumberLessThanOrEquals` <a name="putNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals"></a>

```java
public void putNumberLessThanOrEquals(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>>

---

##### `putNumberNotIn` <a name="putNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn"></a>

```java
public void putNumberNotIn(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberNotIn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>>

---

##### `putNumberNotInRange` <a name="putNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange"></a>

```java
public void putNumberNotInRange(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterNumberNotInRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>>

---

##### `putStringBeginsWith` <a name="putStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith"></a>

```java
public void putStringBeginsWith(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringBeginsWith> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>>

---

##### `putStringContains` <a name="putStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains"></a>

```java
public void putStringContains(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringContains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>>

---

##### `putStringEndsWith` <a name="putStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith"></a>

```java
public void putStringEndsWith(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringEndsWith> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>>

---

##### `putStringIn` <a name="putStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn"></a>

```java
public void putStringIn(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringIn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>>

---

##### `putStringNotBeginsWith` <a name="putStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith"></a>

```java
public void putStringNotBeginsWith(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>>

---

##### `putStringNotContains` <a name="putStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains"></a>

```java
public void putStringNotContains(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotContains> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>>

---

##### `putStringNotEndsWith` <a name="putStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith"></a>

```java
public void putStringNotEndsWith(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotEndsWith> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>>

---

##### `putStringNotIn` <a name="putStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn"></a>

```java
public void putStringNotIn(IResolvable OR java.util.List<EventgridEventSubscriptionAdvancedFilterStringNotIn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>>

---

##### `resetBoolEquals` <a name="resetBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals"></a>

```java
public void resetBoolEquals()
```

##### `resetIsNotNull` <a name="resetIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull"></a>

```java
public void resetIsNotNull()
```

##### `resetIsNullOrUndefined` <a name="resetIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined"></a>

```java
public void resetIsNullOrUndefined()
```

##### `resetNumberGreaterThan` <a name="resetNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan"></a>

```java
public void resetNumberGreaterThan()
```

##### `resetNumberGreaterThanOrEquals` <a name="resetNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals"></a>

```java
public void resetNumberGreaterThanOrEquals()
```

##### `resetNumberIn` <a name="resetNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberIn"></a>

```java
public void resetNumberIn()
```

##### `resetNumberInRange` <a name="resetNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange"></a>

```java
public void resetNumberInRange()
```

##### `resetNumberLessThan` <a name="resetNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan"></a>

```java
public void resetNumberLessThan()
```

##### `resetNumberLessThanOrEquals` <a name="resetNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals"></a>

```java
public void resetNumberLessThanOrEquals()
```

##### `resetNumberNotIn` <a name="resetNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn"></a>

```java
public void resetNumberNotIn()
```

##### `resetNumberNotInRange` <a name="resetNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange"></a>

```java
public void resetNumberNotInRange()
```

##### `resetStringBeginsWith` <a name="resetStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith"></a>

```java
public void resetStringBeginsWith()
```

##### `resetStringContains` <a name="resetStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringContains"></a>

```java
public void resetStringContains()
```

##### `resetStringEndsWith` <a name="resetStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith"></a>

```java
public void resetStringEndsWith()
```

##### `resetStringIn` <a name="resetStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringIn"></a>

```java
public void resetStringIn()
```

##### `resetStringNotBeginsWith` <a name="resetStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith"></a>

```java
public void resetStringNotBeginsWith()
```

##### `resetStringNotContains` <a name="resetStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains"></a>

```java
public void resetStringNotContains()
```

##### `resetStringNotEndsWith` <a name="resetStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith"></a>

```java
public void resetStringNotEndsWith()
```

##### `resetStringNotIn` <a name="resetStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn"></a>

```java
public void resetStringNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEquals">boolEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList">EventgridEventSubscriptionAdvancedFilterBoolEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNull">isNotNull</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList">EventgridEventSubscriptionAdvancedFilterIsNotNullList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined">isNullOrUndefined</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan">numberGreaterThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals">numberGreaterThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberIn">numberIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList">EventgridEventSubscriptionAdvancedFilterNumberInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRange">numberInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList">EventgridEventSubscriptionAdvancedFilterNumberInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan">numberLessThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList">EventgridEventSubscriptionAdvancedFilterNumberLessThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals">numberLessThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn">numberNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList">EventgridEventSubscriptionAdvancedFilterNumberNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange">numberNotInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith">stringBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContains">stringContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList">EventgridEventSubscriptionAdvancedFilterStringContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith">stringEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList">EventgridEventSubscriptionAdvancedFilterStringEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringIn">stringIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList">EventgridEventSubscriptionAdvancedFilterStringInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith">stringNotBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains">stringNotContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList">EventgridEventSubscriptionAdvancedFilterStringNotContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith">stringNotEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn">stringNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList">EventgridEventSubscriptionAdvancedFilterStringNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput">boolEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput">isNotNullInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput">isNullOrUndefinedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput">numberGreaterThanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput">numberGreaterThanOrEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput">numberInInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput">numberInRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput">numberLessThanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput">numberLessThanOrEqualsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput">numberNotInInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput">numberNotInRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput">stringBeginsWithInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput">stringContainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput">stringEndsWithInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput">stringInInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput">stringNotBeginsWithInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput">stringNotContainsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput">stringNotEndsWithInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput">stringNotInInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolEquals`<sup>Required</sup> <a name="boolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEquals"></a>

```java
public EventgridEventSubscriptionAdvancedFilterBoolEqualsList getBoolEquals();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList">EventgridEventSubscriptionAdvancedFilterBoolEqualsList</a>

---

##### `isNotNull`<sup>Required</sup> <a name="isNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNull"></a>

```java
public EventgridEventSubscriptionAdvancedFilterIsNotNullList getIsNotNull();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList">EventgridEventSubscriptionAdvancedFilterIsNotNullList</a>

---

##### `isNullOrUndefined`<sup>Required</sup> <a name="isNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined"></a>

```java
public EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList getIsNullOrUndefined();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a>

---

##### `numberGreaterThan`<sup>Required</sup> <a name="numberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList getNumberGreaterThan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList</a>

---

##### `numberGreaterThanOrEquals`<sup>Required</sup> <a name="numberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList getNumberGreaterThanOrEquals();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a>

---

##### `numberIn`<sup>Required</sup> <a name="numberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberIn"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberInList getNumberIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList">EventgridEventSubscriptionAdvancedFilterNumberInList</a>

---

##### `numberInRange`<sup>Required</sup> <a name="numberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRange"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberInRangeList getNumberInRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList">EventgridEventSubscriptionAdvancedFilterNumberInRangeList</a>

---

##### `numberLessThan`<sup>Required</sup> <a name="numberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberLessThanList getNumberLessThan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList">EventgridEventSubscriptionAdvancedFilterNumberLessThanList</a>

---

##### `numberLessThanOrEquals`<sup>Required</sup> <a name="numberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList getNumberLessThanOrEquals();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a>

---

##### `numberNotIn`<sup>Required</sup> <a name="numberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberNotInList getNumberNotIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList">EventgridEventSubscriptionAdvancedFilterNumberNotInList</a>

---

##### `numberNotInRange`<sup>Required</sup> <a name="numberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange"></a>

```java
public EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList getNumberNotInRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList</a>

---

##### `stringBeginsWith`<sup>Required</sup> <a name="stringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringBeginsWithList getStringBeginsWith();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringBeginsWithList</a>

---

##### `stringContains`<sup>Required</sup> <a name="stringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContains"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringContainsList getStringContains();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList">EventgridEventSubscriptionAdvancedFilterStringContainsList</a>

---

##### `stringEndsWith`<sup>Required</sup> <a name="stringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringEndsWithList getStringEndsWith();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList">EventgridEventSubscriptionAdvancedFilterStringEndsWithList</a>

---

##### `stringIn`<sup>Required</sup> <a name="stringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringIn"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringInList getStringIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList">EventgridEventSubscriptionAdvancedFilterStringInList</a>

---

##### `stringNotBeginsWith`<sup>Required</sup> <a name="stringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList getStringNotBeginsWith();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList</a>

---

##### `stringNotContains`<sup>Required</sup> <a name="stringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotContainsList getStringNotContains();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList">EventgridEventSubscriptionAdvancedFilterStringNotContainsList</a>

---

##### `stringNotEndsWith`<sup>Required</sup> <a name="stringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList getStringNotEndsWith();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList</a>

---

##### `stringNotIn`<sup>Required</sup> <a name="stringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotInList getStringNotIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList">EventgridEventSubscriptionAdvancedFilterStringNotInList</a>

---

##### `boolEqualsInput`<sup>Optional</sup> <a name="boolEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput"></a>

```java
public java.lang.Object getBoolEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>>

---

##### `isNotNullInput`<sup>Optional</sup> <a name="isNotNullInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput"></a>

```java
public java.lang.Object getIsNotNullInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>>

---

##### `isNullOrUndefinedInput`<sup>Optional</sup> <a name="isNullOrUndefinedInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput"></a>

```java
public java.lang.Object getIsNullOrUndefinedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>>

---

##### `numberGreaterThanInput`<sup>Optional</sup> <a name="numberGreaterThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput"></a>

```java
public java.lang.Object getNumberGreaterThanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>>

---

##### `numberGreaterThanOrEqualsInput`<sup>Optional</sup> <a name="numberGreaterThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput"></a>

```java
public java.lang.Object getNumberGreaterThanOrEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>>

---

##### `numberInInput`<sup>Optional</sup> <a name="numberInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput"></a>

```java
public java.lang.Object getNumberInInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>>

---

##### `numberInRangeInput`<sup>Optional</sup> <a name="numberInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput"></a>

```java
public java.lang.Object getNumberInRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>>

---

##### `numberLessThanInput`<sup>Optional</sup> <a name="numberLessThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput"></a>

```java
public java.lang.Object getNumberLessThanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>>

---

##### `numberLessThanOrEqualsInput`<sup>Optional</sup> <a name="numberLessThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput"></a>

```java
public java.lang.Object getNumberLessThanOrEqualsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>>

---

##### `numberNotInInput`<sup>Optional</sup> <a name="numberNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput"></a>

```java
public java.lang.Object getNumberNotInInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>>

---

##### `numberNotInRangeInput`<sup>Optional</sup> <a name="numberNotInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput"></a>

```java
public java.lang.Object getNumberNotInRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>>

---

##### `stringBeginsWithInput`<sup>Optional</sup> <a name="stringBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput"></a>

```java
public java.lang.Object getStringBeginsWithInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>>

---

##### `stringContainsInput`<sup>Optional</sup> <a name="stringContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput"></a>

```java
public java.lang.Object getStringContainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>>

---

##### `stringEndsWithInput`<sup>Optional</sup> <a name="stringEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput"></a>

```java
public java.lang.Object getStringEndsWithInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>>

---

##### `stringInInput`<sup>Optional</sup> <a name="stringInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput"></a>

```java
public java.lang.Object getStringInInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>>

---

##### `stringNotBeginsWithInput`<sup>Optional</sup> <a name="stringNotBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput"></a>

```java
public java.lang.Object getStringNotBeginsWithInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>>

---

##### `stringNotContainsInput`<sup>Optional</sup> <a name="stringNotContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput"></a>

```java
public java.lang.Object getStringNotContainsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>>

---

##### `stringNotEndsWithInput`<sup>Optional</sup> <a name="stringNotEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput"></a>

```java
public java.lang.Object getStringNotEndsWithInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>>

---

##### `stringNotInInput`<sup>Optional</sup> <a name="stringNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput"></a>

```java
public java.lang.Object getStringNotInInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionAdvancedFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList;

new EventgridEventSubscriptionAdvancedFilterStringBeginsWithList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringContainsList;

new EventgridEventSubscriptionAdvancedFilterStringContainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList;

new EventgridEventSubscriptionAdvancedFilterStringEndsWithList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringInList <a name="EventgridEventSubscriptionAdvancedFilterStringInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringInList;

new EventgridEventSubscriptionAdvancedFilterStringInList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringInOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList;

new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList;

new EventgridEventSubscriptionAdvancedFilterStringNotContainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList;

new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAdvancedFilterStringNotInList <a name="EventgridEventSubscriptionAdvancedFilterStringNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotInList;

new EventgridEventSubscriptionAdvancedFilterStringNotInList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get"></a>

```java
public EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>>

---


### EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference;

new EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionAzureFunctionEndpointOutputReference <a name="EventgridEventSubscriptionAzureFunctionEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference;

new EventgridEventSubscriptionAzureFunctionEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch">resetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes">resetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxEventsPerBatch` <a name="resetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch"></a>

```java
public void resetMaxEventsPerBatch()
```

##### `resetPreferredBatchSizeInKilobytes` <a name="resetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```java
public void resetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput">maxEventsPerBatchInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">preferredBatchSizeInKilobytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `maxEventsPerBatchInput`<sup>Optional</sup> <a name="maxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```java
public java.lang.Number getMaxEventsPerBatchInput();
```

- *Type:* java.lang.Number

---

##### `preferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytesInput();
```

- *Type:* java.lang.Number

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `maxEventsPerBatch`<sup>Required</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch"></a>

```java
public java.lang.Number getMaxEventsPerBatch();
```

- *Type:* java.lang.Number

---

##### `preferredBatchSizeInKilobytes`<sup>Required</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionAzureFunctionEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---


### EventgridEventSubscriptionDeadLetterIdentityOutputReference <a name="EventgridEventSubscriptionDeadLetterIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference;

new EventgridEventSubscriptionDeadLetterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity">resetUserAssignedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentity` <a name="resetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity"></a>

```java
public void resetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput">userAssignedIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityInput`<sup>Optional</sup> <a name="userAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput"></a>

```java
public java.lang.String getUserAssignedIdentityInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentity`<sup>Required</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity"></a>

```java
public java.lang.String getUserAssignedIdentity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionDeadLetterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---


### EventgridEventSubscriptionDeliveryIdentityOutputReference <a name="EventgridEventSubscriptionDeliveryIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeliveryIdentityOutputReference;

new EventgridEventSubscriptionDeliveryIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity">resetUserAssignedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentity` <a name="resetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity"></a>

```java
public void resetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput">userAssignedIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityInput`<sup>Optional</sup> <a name="userAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput"></a>

```java
public java.lang.String getUserAssignedIdentityInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentity`<sup>Required</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity"></a>

```java
public java.lang.String getUserAssignedIdentity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionDeliveryIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---


### EventgridEventSubscriptionDeliveryPropertyList <a name="EventgridEventSubscriptionDeliveryPropertyList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeliveryPropertyList;

new EventgridEventSubscriptionDeliveryPropertyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get"></a>

```java
public EventgridEventSubscriptionDeliveryPropertyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>>

---


### EventgridEventSubscriptionDeliveryPropertyOutputReference <a name="EventgridEventSubscriptionDeliveryPropertyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionDeliveryPropertyOutputReference;

new EventgridEventSubscriptionDeliveryPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSourceField">resetSourceField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetSourceField` <a name="resetSourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSourceField"></a>

```java
public void resetSourceField()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput">sourceFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret">secret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField">sourceField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceFieldInput`<sup>Optional</sup> <a name="sourceFieldInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput"></a>

```java
public java.lang.String getSourceFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceField`<sup>Required</sup> <a name="sourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField"></a>

```java
public java.lang.String getSourceField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionRetryPolicyOutputReference <a name="EventgridEventSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionRetryPolicyOutputReference;

new EventgridEventSubscriptionRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput">eventTimeToLiveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive">eventTimeToLive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTimeToLiveInput`<sup>Optional</sup> <a name="eventTimeToLiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput"></a>

```java
public java.lang.Number getEventTimeToLiveInput();
```

- *Type:* java.lang.Number

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```java
public java.lang.Number getMaxDeliveryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `eventTimeToLive`<sup>Required</sup> <a name="eventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive"></a>

```java
public java.lang.Number getEventTimeToLive();
```

- *Type:* java.lang.Number

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---


### EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference;

new EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput">storageBlobContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName">storageBlobContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageBlobContainerNameInput`<sup>Optional</sup> <a name="storageBlobContainerNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput"></a>

```java
public java.lang.String getStorageBlobContainerNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageBlobContainerName`<sup>Required</sup> <a name="storageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName"></a>

```java
public java.lang.String getStorageBlobContainerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionStorageBlobDeadLetterDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---


### EventgridEventSubscriptionStorageQueueEndpointOutputReference <a name="EventgridEventSubscriptionStorageQueueEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference;

new EventgridEventSubscriptionStorageQueueEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds">resetQueueMessageTimeToLiveInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueMessageTimeToLiveInSeconds` <a name="resetQueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds"></a>

```java
public void resetQueueMessageTimeToLiveInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput">queueMessageTimeToLiveInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds">queueMessageTimeToLiveInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queueMessageTimeToLiveInSecondsInput`<sup>Optional</sup> <a name="queueMessageTimeToLiveInSecondsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput"></a>

```java
public java.lang.Number getQueueMessageTimeToLiveInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `queueMessageTimeToLiveInSeconds`<sup>Required</sup> <a name="queueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds"></a>

```java
public java.lang.Number getQueueMessageTimeToLiveInSeconds();
```

- *Type:* java.lang.Number

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionStorageQueueEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---


### EventgridEventSubscriptionSubjectFilterOutputReference <a name="EventgridEventSubscriptionSubjectFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionSubjectFilterOutputReference;

new EventgridEventSubscriptionSubjectFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith">resetSubjectBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith">resetSubjectEndsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive"></a>

```java
public void resetCaseSensitive()
```

##### `resetSubjectBeginsWith` <a name="resetSubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith"></a>

```java
public void resetSubjectBeginsWith()
```

##### `resetSubjectEndsWith` <a name="resetSubjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith"></a>

```java
public void resetSubjectEndsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput">subjectBeginsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput">subjectEndsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith">subjectEndsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput"></a>

```java
public java.lang.Object getCaseSensitiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subjectBeginsWithInput`<sup>Optional</sup> <a name="subjectBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput"></a>

```java
public java.lang.String getSubjectBeginsWithInput();
```

- *Type:* java.lang.String

---

##### `subjectEndsWithInput`<sup>Optional</sup> <a name="subjectEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput"></a>

```java
public java.lang.String getSubjectEndsWithInput();
```

- *Type:* java.lang.String

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive"></a>

```java
public java.lang.Object getCaseSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subjectBeginsWith`<sup>Required</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith"></a>

```java
public java.lang.String getSubjectBeginsWith();
```

- *Type:* java.lang.String

---

##### `subjectEndsWith`<sup>Required</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith"></a>

```java
public java.lang.String getSubjectEndsWith();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionSubjectFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---


### EventgridEventSubscriptionTimeoutsOutputReference <a name="EventgridEventSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionTimeoutsOutputReference;

new EventgridEventSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### EventgridEventSubscriptionWebhookEndpointOutputReference <a name="EventgridEventSubscriptionWebhookEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventgrid_event_subscription.EventgridEventSubscriptionWebhookEndpointOutputReference;

new EventgridEventSubscriptionWebhookEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri">resetActiveDirectoryAppIdOrUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId">resetActiveDirectoryTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch">resetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes">resetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryAppIdOrUri` <a name="resetActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri"></a>

```java
public void resetActiveDirectoryAppIdOrUri()
```

##### `resetActiveDirectoryTenantId` <a name="resetActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId"></a>

```java
public void resetActiveDirectoryTenantId()
```

##### `resetMaxEventsPerBatch` <a name="resetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch"></a>

```java
public void resetMaxEventsPerBatch()
```

##### `resetPreferredBatchSizeInKilobytes` <a name="resetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```java
public void resetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput">activeDirectoryAppIdOrUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput">activeDirectoryTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput">maxEventsPerBatchInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">preferredBatchSizeInKilobytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri">activeDirectoryAppIdOrUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId">activeDirectoryTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `activeDirectoryAppIdOrUriInput`<sup>Optional</sup> <a name="activeDirectoryAppIdOrUriInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput"></a>

```java
public java.lang.String getActiveDirectoryAppIdOrUriInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryTenantIdInput`<sup>Optional</sup> <a name="activeDirectoryTenantIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput"></a>

```java
public java.lang.String getActiveDirectoryTenantIdInput();
```

- *Type:* java.lang.String

---

##### `maxEventsPerBatchInput`<sup>Optional</sup> <a name="maxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```java
public java.lang.Number getMaxEventsPerBatchInput();
```

- *Type:* java.lang.Number

---

##### `preferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytesInput();
```

- *Type:* java.lang.Number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryAppIdOrUri`<sup>Required</sup> <a name="activeDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri"></a>

```java
public java.lang.String getActiveDirectoryAppIdOrUri();
```

- *Type:* java.lang.String

---

##### `activeDirectoryTenantId`<sup>Required</sup> <a name="activeDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId"></a>

```java
public java.lang.String getActiveDirectoryTenantId();
```

- *Type:* java.lang.String

---

##### `maxEventsPerBatch`<sup>Required</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch"></a>

```java
public java.lang.Number getMaxEventsPerBatch();
```

- *Type:* java.lang.Number

---

##### `preferredBatchSizeInKilobytes`<sup>Required</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```java
public java.lang.Number getPreferredBatchSizeInKilobytes();
```

- *Type:* java.lang.Number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue"></a>

```java
public EventgridEventSubscriptionWebhookEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---



