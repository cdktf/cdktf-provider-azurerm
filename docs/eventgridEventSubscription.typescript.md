# `eventgridEventSubscription` Submodule <a name="`eventgridEventSubscription` Submodule" id="@cdktf/provider-azurerm.eventgridEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridEventSubscription <a name="EventgridEventSubscription" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription azurerm_eventgrid_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscription(scope: Construct, id: string, config: EventgridEventSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig">EventgridEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig">EventgridEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedFilter` <a name="putAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter"></a>

```typescript
public putAdvancedFilter(value: EventgridEventSubscriptionAdvancedFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `putAzureFunctionEndpoint` <a name="putAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint"></a>

```typescript
public putAzureFunctionEndpoint(value: EventgridEventSubscriptionAzureFunctionEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `putDeadLetterIdentity` <a name="putDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity"></a>

```typescript
public putDeadLetterIdentity(value: EventgridEventSubscriptionDeadLetterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `putDeliveryIdentity` <a name="putDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity"></a>

```typescript
public putDeliveryIdentity(value: EventgridEventSubscriptionDeliveryIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `putDeliveryProperty` <a name="putDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty"></a>

```typescript
public putDeliveryProperty(value: IResolvable | EventgridEventSubscriptionDeliveryProperty[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: EventgridEventSubscriptionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `putStorageBlobDeadLetterDestination` <a name="putStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination"></a>

```typescript
public putStorageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `putStorageQueueEndpoint` <a name="putStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint"></a>

```typescript
public putStorageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `putSubjectFilter` <a name="putSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter"></a>

```typescript
public putSubjectFilter(value: EventgridEventSubscriptionSubjectFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: EventgridEventSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

---

##### `putWebhookEndpoint` <a name="putWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint"></a>

```typescript
public putWebhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `resetAdvancedFilter` <a name="resetAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilter"></a>

```typescript
public resetAdvancedFilter(): void
```

##### `resetAdvancedFilteringOnArraysEnabled` <a name="resetAdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilteringOnArraysEnabled"></a>

```typescript
public resetAdvancedFilteringOnArraysEnabled(): void
```

##### `resetAzureFunctionEndpoint` <a name="resetAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAzureFunctionEndpoint"></a>

```typescript
public resetAzureFunctionEndpoint(): void
```

##### `resetDeadLetterIdentity` <a name="resetDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeadLetterIdentity"></a>

```typescript
public resetDeadLetterIdentity(): void
```

##### `resetDeliveryIdentity` <a name="resetDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryIdentity"></a>

```typescript
public resetDeliveryIdentity(): void
```

##### `resetDeliveryProperty` <a name="resetDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryProperty"></a>

```typescript
public resetDeliveryProperty(): void
```

##### `resetEventDeliverySchema` <a name="resetEventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventDeliverySchema"></a>

```typescript
public resetEventDeliverySchema(): void
```

##### `resetEventhubEndpointId` <a name="resetEventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventhubEndpointId"></a>

```typescript
public resetEventhubEndpointId(): void
```

##### `resetExpirationTimeUtc` <a name="resetExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetExpirationTimeUtc"></a>

```typescript
public resetExpirationTimeUtc(): void
```

##### `resetHybridConnectionEndpointId` <a name="resetHybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetHybridConnectionEndpointId"></a>

```typescript
public resetHybridConnectionEndpointId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludedEventTypes` <a name="resetIncludedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetIncludedEventTypes"></a>

```typescript
public resetIncludedEventTypes(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetServiceBusQueueEndpointId` <a name="resetServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusQueueEndpointId"></a>

```typescript
public resetServiceBusQueueEndpointId(): void
```

##### `resetServiceBusTopicEndpointId` <a name="resetServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusTopicEndpointId"></a>

```typescript
public resetServiceBusTopicEndpointId(): void
```

##### `resetStorageBlobDeadLetterDestination` <a name="resetStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageBlobDeadLetterDestination"></a>

```typescript
public resetStorageBlobDeadLetterDestination(): void
```

##### `resetStorageQueueEndpoint` <a name="resetStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageQueueEndpoint"></a>

```typescript
public resetStorageQueueEndpoint(): void
```

##### `resetSubjectFilter` <a name="resetSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetSubjectFilter"></a>

```typescript
public resetSubjectFilter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebhookEndpoint` <a name="resetWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetWebhookEndpoint"></a>

```typescript
public resetWebhookEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridEventSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

eventgridEventSubscription.EventgridEventSubscription.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

eventgridEventSubscription.EventgridEventSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

eventgridEventSubscription.EventgridEventSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventgridEventSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventgridEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput">advancedFilteringOnArraysEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput">advancedFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput">azureFunctionEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput">deadLetterIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput">deliveryIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput">deliveryPropertyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput">eventDeliverySchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput">eventhubEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput">expirationTimeUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput">hybridConnectionEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput">includedEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput">serviceBusQueueEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput">serviceBusTopicEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput">storageBlobDeadLetterDestinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput">storageQueueEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput">subjectFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput">webhookEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled">advancedFilteringOnArraysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema">eventDeliverySchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId">eventhubEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc">expirationTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId">hybridConnectionEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes">includedEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId">serviceBusQueueEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId">serviceBusTopicEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedFilter`<sup>Required</sup> <a name="advancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilter"></a>

```typescript
public readonly advancedFilter: EventgridEventSubscriptionAdvancedFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference">EventgridEventSubscriptionAdvancedFilterOutputReference</a>

---

##### `azureFunctionEndpoint`<sup>Required</sup> <a name="azureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpoint"></a>

```typescript
public readonly azureFunctionEndpoint: EventgridEventSubscriptionAzureFunctionEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference">EventgridEventSubscriptionAzureFunctionEndpointOutputReference</a>

---

##### `deadLetterIdentity`<sup>Required</sup> <a name="deadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentity"></a>

```typescript
public readonly deadLetterIdentity: EventgridEventSubscriptionDeadLetterIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference">EventgridEventSubscriptionDeadLetterIdentityOutputReference</a>

---

##### `deliveryIdentity`<sup>Required</sup> <a name="deliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentity"></a>

```typescript
public readonly deliveryIdentity: EventgridEventSubscriptionDeliveryIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference">EventgridEventSubscriptionDeliveryIdentityOutputReference</a>

---

##### `deliveryProperty`<sup>Required</sup> <a name="deliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryProperty"></a>

```typescript
public readonly deliveryProperty: EventgridEventSubscriptionDeliveryPropertyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList">EventgridEventSubscriptionDeliveryPropertyList</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventgridEventSubscriptionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference">EventgridEventSubscriptionRetryPolicyOutputReference</a>

---

##### `storageBlobDeadLetterDestination`<sup>Required</sup> <a name="storageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestination"></a>

```typescript
public readonly storageBlobDeadLetterDestination: EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a>

---

##### `storageQueueEndpoint`<sup>Required</sup> <a name="storageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpoint"></a>

```typescript
public readonly storageQueueEndpoint: EventgridEventSubscriptionStorageQueueEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference">EventgridEventSubscriptionStorageQueueEndpointOutputReference</a>

---

##### `subjectFilter`<sup>Required</sup> <a name="subjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilter"></a>

```typescript
public readonly subjectFilter: EventgridEventSubscriptionSubjectFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference">EventgridEventSubscriptionSubjectFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: EventgridEventSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference">EventgridEventSubscriptionTimeoutsOutputReference</a>

---

##### `webhookEndpoint`<sup>Required</sup> <a name="webhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpoint"></a>

```typescript
public readonly webhookEndpoint: EventgridEventSubscriptionWebhookEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference">EventgridEventSubscriptionWebhookEndpointOutputReference</a>

---

##### `advancedFilteringOnArraysEnabledInput`<sup>Optional</sup> <a name="advancedFilteringOnArraysEnabledInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput"></a>

```typescript
public readonly advancedFilteringOnArraysEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advancedFilterInput`<sup>Optional</sup> <a name="advancedFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput"></a>

```typescript
public readonly advancedFilterInput: EventgridEventSubscriptionAdvancedFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `azureFunctionEndpointInput`<sup>Optional</sup> <a name="azureFunctionEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput"></a>

```typescript
public readonly azureFunctionEndpointInput: EventgridEventSubscriptionAzureFunctionEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `deadLetterIdentityInput`<sup>Optional</sup> <a name="deadLetterIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput"></a>

```typescript
public readonly deadLetterIdentityInput: EventgridEventSubscriptionDeadLetterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `deliveryIdentityInput`<sup>Optional</sup> <a name="deliveryIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput"></a>

```typescript
public readonly deliveryIdentityInput: EventgridEventSubscriptionDeliveryIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `deliveryPropertyInput`<sup>Optional</sup> <a name="deliveryPropertyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput"></a>

```typescript
public readonly deliveryPropertyInput: IResolvable | EventgridEventSubscriptionDeliveryProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]

---

##### `eventDeliverySchemaInput`<sup>Optional</sup> <a name="eventDeliverySchemaInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput"></a>

```typescript
public readonly eventDeliverySchemaInput: string;
```

- *Type:* string

---

##### `eventhubEndpointIdInput`<sup>Optional</sup> <a name="eventhubEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput"></a>

```typescript
public readonly eventhubEndpointIdInput: string;
```

- *Type:* string

---

##### `expirationTimeUtcInput`<sup>Optional</sup> <a name="expirationTimeUtcInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput"></a>

```typescript
public readonly expirationTimeUtcInput: string;
```

- *Type:* string

---

##### `hybridConnectionEndpointIdInput`<sup>Optional</sup> <a name="hybridConnectionEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput"></a>

```typescript
public readonly hybridConnectionEndpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includedEventTypesInput`<sup>Optional</sup> <a name="includedEventTypesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput"></a>

```typescript
public readonly includedEventTypesInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: EventgridEventSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceBusQueueEndpointIdInput`<sup>Optional</sup> <a name="serviceBusQueueEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput"></a>

```typescript
public readonly serviceBusQueueEndpointIdInput: string;
```

- *Type:* string

---

##### `serviceBusTopicEndpointIdInput`<sup>Optional</sup> <a name="serviceBusTopicEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput"></a>

```typescript
public readonly serviceBusTopicEndpointIdInput: string;
```

- *Type:* string

---

##### `storageBlobDeadLetterDestinationInput`<sup>Optional</sup> <a name="storageBlobDeadLetterDestinationInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput"></a>

```typescript
public readonly storageBlobDeadLetterDestinationInput: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `storageQueueEndpointInput`<sup>Optional</sup> <a name="storageQueueEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput"></a>

```typescript
public readonly storageQueueEndpointInput: EventgridEventSubscriptionStorageQueueEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `subjectFilterInput`<sup>Optional</sup> <a name="subjectFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput"></a>

```typescript
public readonly subjectFilterInput: EventgridEventSubscriptionSubjectFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventgridEventSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

---

##### `webhookEndpointInput`<sup>Optional</sup> <a name="webhookEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput"></a>

```typescript
public readonly webhookEndpointInput: EventgridEventSubscriptionWebhookEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `advancedFilteringOnArraysEnabled`<sup>Required</sup> <a name="advancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled"></a>

```typescript
public readonly advancedFilteringOnArraysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventDeliverySchema`<sup>Required</sup> <a name="eventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema"></a>

```typescript
public readonly eventDeliverySchema: string;
```

- *Type:* string

---

##### `eventhubEndpointId`<sup>Required</sup> <a name="eventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId"></a>

```typescript
public readonly eventhubEndpointId: string;
```

- *Type:* string

---

##### `expirationTimeUtc`<sup>Required</sup> <a name="expirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc"></a>

```typescript
public readonly expirationTimeUtc: string;
```

- *Type:* string

---

##### `hybridConnectionEndpointId`<sup>Required</sup> <a name="hybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId"></a>

```typescript
public readonly hybridConnectionEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includedEventTypes`<sup>Required</sup> <a name="includedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes"></a>

```typescript
public readonly includedEventTypes: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceBusQueueEndpointId`<sup>Required</sup> <a name="serviceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId"></a>

```typescript
public readonly serviceBusQueueEndpointId: string;
```

- *Type:* string

---

##### `serviceBusTopicEndpointId`<sup>Required</sup> <a name="serviceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId"></a>

```typescript
public readonly serviceBusTopicEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridEventSubscriptionAdvancedFilter <a name="EventgridEventSubscriptionAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilter: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals">boolEquals</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]</code> | bool_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull">isNotNull</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]</code> | is_not_null block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined">isNullOrUndefined</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]</code> | is_null_or_undefined block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan">numberGreaterThan</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]</code> | number_greater_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals">numberGreaterThanOrEquals</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]</code> | number_greater_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn">numberIn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]</code> | number_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange">numberInRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]</code> | number_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan">numberLessThan</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]</code> | number_less_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals">numberLessThanOrEquals</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]</code> | number_less_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn">numberNotIn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]</code> | number_not_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange">numberNotInRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]</code> | number_not_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith">stringBeginsWith</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]</code> | string_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains">stringContains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]</code> | string_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith">stringEndsWith</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]</code> | string_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn">stringIn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]</code> | string_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith">stringNotBeginsWith</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]</code> | string_not_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains">stringNotContains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]</code> | string_not_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith">stringNotEndsWith</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]</code> | string_not_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn">stringNotIn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]</code> | string_not_in block. |

---

##### `boolEquals`<sup>Optional</sup> <a name="boolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals"></a>

```typescript
public readonly boolEquals: IResolvable | EventgridEventSubscriptionAdvancedFilterBoolEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]

bool_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#bool_equals EventgridEventSubscription#bool_equals}

---

##### `isNotNull`<sup>Optional</sup> <a name="isNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull"></a>

```typescript
public readonly isNotNull: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNotNull[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]

is_not_null block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#is_not_null EventgridEventSubscription#is_not_null}

---

##### `isNullOrUndefined`<sup>Optional</sup> <a name="isNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined"></a>

```typescript
public readonly isNullOrUndefined: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]

is_null_or_undefined block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}

---

##### `numberGreaterThan`<sup>Optional</sup> <a name="numberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan"></a>

```typescript
public readonly numberGreaterThan: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]

number_greater_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_greater_than EventgridEventSubscription#number_greater_than}

---

##### `numberGreaterThanOrEquals`<sup>Optional</sup> <a name="numberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals"></a>

```typescript
public readonly numberGreaterThanOrEquals: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]

number_greater_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}

---

##### `numberIn`<sup>Optional</sup> <a name="numberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn"></a>

```typescript
public readonly numberIn: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]

number_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_in EventgridEventSubscription#number_in}

---

##### `numberInRange`<sup>Optional</sup> <a name="numberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange"></a>

```typescript
public readonly numberInRange: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]

number_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_in_range EventgridEventSubscription#number_in_range}

---

##### `numberLessThan`<sup>Optional</sup> <a name="numberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan"></a>

```typescript
public readonly numberLessThan: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]

number_less_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_less_than EventgridEventSubscription#number_less_than}

---

##### `numberLessThanOrEquals`<sup>Optional</sup> <a name="numberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals"></a>

```typescript
public readonly numberLessThanOrEquals: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]

number_less_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}

---

##### `numberNotIn`<sup>Optional</sup> <a name="numberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn"></a>

```typescript
public readonly numberNotIn: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]

number_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_not_in EventgridEventSubscription#number_not_in}

---

##### `numberNotInRange`<sup>Optional</sup> <a name="numberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange"></a>

```typescript
public readonly numberNotInRange: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]

number_not_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#number_not_in_range EventgridEventSubscription#number_not_in_range}

---

##### `stringBeginsWith`<sup>Optional</sup> <a name="stringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith"></a>

```typescript
public readonly stringBeginsWith: IResolvable | EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]

string_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_begins_with EventgridEventSubscription#string_begins_with}

---

##### `stringContains`<sup>Optional</sup> <a name="stringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains"></a>

```typescript
public readonly stringContains: IResolvable | EventgridEventSubscriptionAdvancedFilterStringContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]

string_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_contains EventgridEventSubscription#string_contains}

---

##### `stringEndsWith`<sup>Optional</sup> <a name="stringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith"></a>

```typescript
public readonly stringEndsWith: IResolvable | EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]

string_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_ends_with EventgridEventSubscription#string_ends_with}

---

##### `stringIn`<sup>Optional</sup> <a name="stringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn"></a>

```typescript
public readonly stringIn: IResolvable | EventgridEventSubscriptionAdvancedFilterStringIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]

string_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_in EventgridEventSubscription#string_in}

---

##### `stringNotBeginsWith`<sup>Optional</sup> <a name="stringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith"></a>

```typescript
public readonly stringNotBeginsWith: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]

string_not_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_not_begins_with EventgridEventSubscription#string_not_begins_with}

---

##### `stringNotContains`<sup>Optional</sup> <a name="stringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains"></a>

```typescript
public readonly stringNotContains: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]

string_not_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_not_contains EventgridEventSubscription#string_not_contains}

---

##### `stringNotEndsWith`<sup>Optional</sup> <a name="stringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith"></a>

```typescript
public readonly stringNotEndsWith: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]

string_not_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_not_ends_with EventgridEventSubscription#string_not_ends_with}

---

##### `stringNotIn`<sup>Optional</sup> <a name="stringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn"></a>

```typescript
public readonly stringNotIn: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]

string_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#string_not_in EventgridEventSubscription#string_not_in}

---

### EventgridEventSubscriptionAdvancedFilterBoolEquals <a name="EventgridEventSubscriptionAdvancedFilterBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterBoolEquals: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterIsNotNull <a name="EventgridEventSubscriptionAdvancedFilterIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterIsNotNull: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterIsNullOrUndefined: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThan <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberGreaterThan: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberIn <a name="EventgridEventSubscriptionAdvancedFilterNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberIn: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberInRange: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values">values</a></code> | <code>cdktf.IResolvable \| number[][]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values"></a>

```typescript
public readonly values: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThan <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberLessThan: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotIn <a name="EventgridEventSubscriptionAdvancedFilterNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberNotIn: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterNumberNotInRange: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values">values</a></code> | <code>cdktf.IResolvable \| number[][]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values"></a>

```typescript
public readonly values: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringBeginsWith: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringContains <a name="EventgridEventSubscriptionAdvancedFilterStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringContains: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringEndsWith: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringIn <a name="EventgridEventSubscriptionAdvancedFilterStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringIn: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringNotBeginsWith: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotContains <a name="EventgridEventSubscriptionAdvancedFilterStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringNotContains: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringNotEndsWith: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotIn <a name="EventgridEventSubscriptionAdvancedFilterStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAdvancedFilterStringNotIn: eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAzureFunctionEndpoint <a name="EventgridEventSubscriptionAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionAzureFunctionEndpoint: eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}.

---

##### `maxEventsPerBatch`<sup>Optional</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch"></a>

```typescript
public readonly maxEventsPerBatch: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `preferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes"></a>

```typescript
public readonly preferredBatchSizeInKilobytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

### EventgridEventSubscriptionConfig <a name="EventgridEventSubscriptionConfig" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionConfig: eventgridEventSubscription.EventgridEventSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter">advancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | advanced_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled">advancedFilteringOnArraysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint">azureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | azure_function_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity">deadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | dead_letter_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity">deliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | delivery_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty">deliveryProperty</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]</code> | delivery_property block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema">eventDeliverySchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId">eventhubEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc">expirationTimeUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId">hybridConnectionEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes">includedEventTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId">serviceBusQueueEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId">serviceBusTopicEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination">storageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | storage_blob_dead_letter_destination block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint">storageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | storage_queue_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter">subjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | subject_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint">webhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | webhook_endpoint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}.

---

##### `advancedFilter`<sup>Optional</sup> <a name="advancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter"></a>

```typescript
public readonly advancedFilter: EventgridEventSubscriptionAdvancedFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

advanced_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}

---

##### `advancedFilteringOnArraysEnabled`<sup>Optional</sup> <a name="advancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled"></a>

```typescript
public readonly advancedFilteringOnArraysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}.

---

##### `azureFunctionEndpoint`<sup>Optional</sup> <a name="azureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint"></a>

```typescript
public readonly azureFunctionEndpoint: EventgridEventSubscriptionAzureFunctionEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

azure_function_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}

---

##### `deadLetterIdentity`<sup>Optional</sup> <a name="deadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity"></a>

```typescript
public readonly deadLetterIdentity: EventgridEventSubscriptionDeadLetterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

dead_letter_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}

---

##### `deliveryIdentity`<sup>Optional</sup> <a name="deliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity"></a>

```typescript
public readonly deliveryIdentity: EventgridEventSubscriptionDeliveryIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

delivery_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}

---

##### `deliveryProperty`<sup>Optional</sup> <a name="deliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty"></a>

```typescript
public readonly deliveryProperty: IResolvable | EventgridEventSubscriptionDeliveryProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]

delivery_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}

---

##### `eventDeliverySchema`<sup>Optional</sup> <a name="eventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema"></a>

```typescript
public readonly eventDeliverySchema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}.

---

##### `eventhubEndpointId`<sup>Optional</sup> <a name="eventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId"></a>

```typescript
public readonly eventhubEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}.

---

##### `expirationTimeUtc`<sup>Optional</sup> <a name="expirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc"></a>

```typescript
public readonly expirationTimeUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}.

---

##### `hybridConnectionEndpointId`<sup>Optional</sup> <a name="hybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId"></a>

```typescript
public readonly hybridConnectionEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedEventTypes`<sup>Optional</sup> <a name="includedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes"></a>

```typescript
public readonly includedEventTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}.

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: EventgridEventSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}

---

##### `serviceBusQueueEndpointId`<sup>Optional</sup> <a name="serviceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId"></a>

```typescript
public readonly serviceBusQueueEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}.

---

##### `serviceBusTopicEndpointId`<sup>Optional</sup> <a name="serviceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId"></a>

```typescript
public readonly serviceBusTopicEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}.

---

##### `storageBlobDeadLetterDestination`<sup>Optional</sup> <a name="storageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination"></a>

```typescript
public readonly storageBlobDeadLetterDestination: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

storage_blob_dead_letter_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}

---

##### `storageQueueEndpoint`<sup>Optional</sup> <a name="storageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint"></a>

```typescript
public readonly storageQueueEndpoint: EventgridEventSubscriptionStorageQueueEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

storage_queue_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter"></a>

```typescript
public readonly subjectFilter: EventgridEventSubscriptionSubjectFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

subject_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventgridEventSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}

---

##### `webhookEndpoint`<sup>Optional</sup> <a name="webhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint"></a>

```typescript
public readonly webhookEndpoint: EventgridEventSubscriptionWebhookEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

webhook_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}

---

### EventgridEventSubscriptionDeadLetterIdentity <a name="EventgridEventSubscriptionDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionDeadLetterIdentity: eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `userAssignedIdentity`<sup>Optional</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity"></a>

```typescript
public readonly userAssignedIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryIdentity <a name="EventgridEventSubscriptionDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionDeliveryIdentity: eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `userAssignedIdentity`<sup>Optional</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity"></a>

```typescript
public readonly userAssignedIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryProperty <a name="EventgridEventSubscriptionDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionDeliveryProperty: eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret">secret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField">sourceField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}.

---

##### `sourceField`<sup>Optional</sup> <a name="sourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField"></a>

```typescript
public readonly sourceField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionRetryPolicy <a name="EventgridEventSubscriptionRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionRetryPolicy: eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive">eventTimeToLive</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}. |

---

##### `eventTimeToLive`<sup>Required</sup> <a name="eventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive"></a>

```typescript
public readonly eventTimeToLive: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}.

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}.

---

### EventgridEventSubscriptionStorageBlobDeadLetterDestination <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionStorageBlobDeadLetterDestination: eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName">storageBlobContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}. |

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `storageBlobContainerName`<sup>Required</sup> <a name="storageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName"></a>

```typescript
public readonly storageBlobContainerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}.

---

### EventgridEventSubscriptionStorageQueueEndpoint <a name="EventgridEventSubscriptionStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionStorageQueueEndpoint: eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName">queueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds">queueMessageTimeToLiveInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `queueMessageTimeToLiveInSeconds`<sup>Optional</sup> <a name="queueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds"></a>

```typescript
public readonly queueMessageTimeToLiveInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}.

---

### EventgridEventSubscriptionSubjectFilter <a name="EventgridEventSubscriptionSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionSubjectFilter: eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith">subjectEndsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}. |

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}.

---

##### `subjectBeginsWith`<sup>Optional</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith"></a>

```typescript
public readonly subjectBeginsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}.

---

##### `subjectEndsWith`<sup>Optional</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith"></a>

```typescript
public readonly subjectEndsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}.

---

### EventgridEventSubscriptionTimeouts <a name="EventgridEventSubscriptionTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionTimeouts: eventgridEventSubscription.EventgridEventSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}.

---

### EventgridEventSubscriptionWebhookEndpoint <a name="EventgridEventSubscriptionWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

const eventgridEventSubscriptionWebhookEndpoint: eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri">activeDirectoryAppIdOrUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId">activeDirectoryTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}.

---

##### `activeDirectoryAppIdOrUri`<sup>Optional</sup> <a name="activeDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri"></a>

```typescript
public readonly activeDirectoryAppIdOrUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}.

---

##### `activeDirectoryTenantId`<sup>Optional</sup> <a name="activeDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId"></a>

```typescript
public readonly activeDirectoryTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}.

---

##### `maxEventsPerBatch`<sup>Optional</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch"></a>

```typescript
public readonly maxEventsPerBatch: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `preferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes"></a>

```typescript
public readonly preferredBatchSizeInKilobytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridEventSubscriptionAdvancedFilterBoolEqualsList <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterBoolEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]

---


### EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterBoolEquals;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullList <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNotNull[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNotNull;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberInList <a name="EventgridEventSubscriptionAdvancedFilterNumberInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberIn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput">valuesInput</a></code> | <code>cdktf.IResolvable \| number[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values">values</a></code> | <code>cdktf.IResolvable \| number[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values"></a>

```typescript
public readonly values: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberInRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThan;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotIn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput">valuesInput</a></code> | <code>cdktf.IResolvable \| number[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values">values</a></code> | <code>cdktf.IResolvable \| number[][]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values"></a>

```typescript
public readonly values: IResolvable | number[][];
```

- *Type:* cdktf.IResolvable | number[][]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotInRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>

---


### EventgridEventSubscriptionAdvancedFilterOutputReference <a name="EventgridEventSubscriptionAdvancedFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoolEquals` <a name="putBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals"></a>

```typescript
public putBoolEquals(value: IResolvable | EventgridEventSubscriptionAdvancedFilterBoolEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]

---

##### `putIsNotNull` <a name="putIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull"></a>

```typescript
public putIsNotNull(value: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNotNull[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]

---

##### `putIsNullOrUndefined` <a name="putIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined"></a>

```typescript
public putIsNullOrUndefined(value: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]

---

##### `putNumberGreaterThan` <a name="putNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan"></a>

```typescript
public putNumberGreaterThan(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]

---

##### `putNumberGreaterThanOrEquals` <a name="putNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals"></a>

```typescript
public putNumberGreaterThanOrEquals(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]

---

##### `putNumberIn` <a name="putNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn"></a>

```typescript
public putNumberIn(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberIn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]

---

##### `putNumberInRange` <a name="putNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange"></a>

```typescript
public putNumberInRange(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberInRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]

---

##### `putNumberLessThan` <a name="putNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan"></a>

```typescript
public putNumberLessThan(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThan[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]

---

##### `putNumberLessThanOrEquals` <a name="putNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals"></a>

```typescript
public putNumberLessThanOrEquals(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]

---

##### `putNumberNotIn` <a name="putNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn"></a>

```typescript
public putNumberNotIn(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotIn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]

---

##### `putNumberNotInRange` <a name="putNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange"></a>

```typescript
public putNumberNotInRange(value: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotInRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]

---

##### `putStringBeginsWith` <a name="putStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith"></a>

```typescript
public putStringBeginsWith(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringBeginsWith[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]

---

##### `putStringContains` <a name="putStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains"></a>

```typescript
public putStringContains(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringContains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]

---

##### `putStringEndsWith` <a name="putStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith"></a>

```typescript
public putStringEndsWith(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringEndsWith[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]

---

##### `putStringIn` <a name="putStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn"></a>

```typescript
public putStringIn(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringIn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]

---

##### `putStringNotBeginsWith` <a name="putStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith"></a>

```typescript
public putStringNotBeginsWith(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]

---

##### `putStringNotContains` <a name="putStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains"></a>

```typescript
public putStringNotContains(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotContains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]

---

##### `putStringNotEndsWith` <a name="putStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith"></a>

```typescript
public putStringNotEndsWith(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]

---

##### `putStringNotIn` <a name="putStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn"></a>

```typescript
public putStringNotIn(value: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotIn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]

---

##### `resetBoolEquals` <a name="resetBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals"></a>

```typescript
public resetBoolEquals(): void
```

##### `resetIsNotNull` <a name="resetIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull"></a>

```typescript
public resetIsNotNull(): void
```

##### `resetIsNullOrUndefined` <a name="resetIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined"></a>

```typescript
public resetIsNullOrUndefined(): void
```

##### `resetNumberGreaterThan` <a name="resetNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan"></a>

```typescript
public resetNumberGreaterThan(): void
```

##### `resetNumberGreaterThanOrEquals` <a name="resetNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals"></a>

```typescript
public resetNumberGreaterThanOrEquals(): void
```

##### `resetNumberIn` <a name="resetNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberIn"></a>

```typescript
public resetNumberIn(): void
```

##### `resetNumberInRange` <a name="resetNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange"></a>

```typescript
public resetNumberInRange(): void
```

##### `resetNumberLessThan` <a name="resetNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan"></a>

```typescript
public resetNumberLessThan(): void
```

##### `resetNumberLessThanOrEquals` <a name="resetNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals"></a>

```typescript
public resetNumberLessThanOrEquals(): void
```

##### `resetNumberNotIn` <a name="resetNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn"></a>

```typescript
public resetNumberNotIn(): void
```

##### `resetNumberNotInRange` <a name="resetNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange"></a>

```typescript
public resetNumberNotInRange(): void
```

##### `resetStringBeginsWith` <a name="resetStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith"></a>

```typescript
public resetStringBeginsWith(): void
```

##### `resetStringContains` <a name="resetStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringContains"></a>

```typescript
public resetStringContains(): void
```

##### `resetStringEndsWith` <a name="resetStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith"></a>

```typescript
public resetStringEndsWith(): void
```

##### `resetStringIn` <a name="resetStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringIn"></a>

```typescript
public resetStringIn(): void
```

##### `resetStringNotBeginsWith` <a name="resetStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith"></a>

```typescript
public resetStringNotBeginsWith(): void
```

##### `resetStringNotContains` <a name="resetStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains"></a>

```typescript
public resetStringNotContains(): void
```

##### `resetStringNotEndsWith` <a name="resetStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith"></a>

```typescript
public resetStringNotEndsWith(): void
```

##### `resetStringNotIn` <a name="resetStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn"></a>

```typescript
public resetStringNotIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput">boolEqualsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput">isNotNullInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput">isNullOrUndefinedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput">numberGreaterThanInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput">numberGreaterThanOrEqualsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput">numberInInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput">numberInRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput">numberLessThanInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput">numberLessThanOrEqualsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput">numberNotInInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput">numberNotInRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput">stringBeginsWithInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput">stringContainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput">stringEndsWithInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput">stringInInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput">stringNotBeginsWithInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput">stringNotContainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput">stringNotEndsWithInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput">stringNotInInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolEquals`<sup>Required</sup> <a name="boolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEquals"></a>

```typescript
public readonly boolEquals: EventgridEventSubscriptionAdvancedFilterBoolEqualsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList">EventgridEventSubscriptionAdvancedFilterBoolEqualsList</a>

---

##### `isNotNull`<sup>Required</sup> <a name="isNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNull"></a>

```typescript
public readonly isNotNull: EventgridEventSubscriptionAdvancedFilterIsNotNullList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList">EventgridEventSubscriptionAdvancedFilterIsNotNullList</a>

---

##### `isNullOrUndefined`<sup>Required</sup> <a name="isNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined"></a>

```typescript
public readonly isNullOrUndefined: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a>

---

##### `numberGreaterThan`<sup>Required</sup> <a name="numberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan"></a>

```typescript
public readonly numberGreaterThan: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList</a>

---

##### `numberGreaterThanOrEquals`<sup>Required</sup> <a name="numberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals"></a>

```typescript
public readonly numberGreaterThanOrEquals: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a>

---

##### `numberIn`<sup>Required</sup> <a name="numberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberIn"></a>

```typescript
public readonly numberIn: EventgridEventSubscriptionAdvancedFilterNumberInList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList">EventgridEventSubscriptionAdvancedFilterNumberInList</a>

---

##### `numberInRange`<sup>Required</sup> <a name="numberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRange"></a>

```typescript
public readonly numberInRange: EventgridEventSubscriptionAdvancedFilterNumberInRangeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList">EventgridEventSubscriptionAdvancedFilterNumberInRangeList</a>

---

##### `numberLessThan`<sup>Required</sup> <a name="numberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan"></a>

```typescript
public readonly numberLessThan: EventgridEventSubscriptionAdvancedFilterNumberLessThanList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList">EventgridEventSubscriptionAdvancedFilterNumberLessThanList</a>

---

##### `numberLessThanOrEquals`<sup>Required</sup> <a name="numberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals"></a>

```typescript
public readonly numberLessThanOrEquals: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a>

---

##### `numberNotIn`<sup>Required</sup> <a name="numberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn"></a>

```typescript
public readonly numberNotIn: EventgridEventSubscriptionAdvancedFilterNumberNotInList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList">EventgridEventSubscriptionAdvancedFilterNumberNotInList</a>

---

##### `numberNotInRange`<sup>Required</sup> <a name="numberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange"></a>

```typescript
public readonly numberNotInRange: EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList</a>

---

##### `stringBeginsWith`<sup>Required</sup> <a name="stringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith"></a>

```typescript
public readonly stringBeginsWith: EventgridEventSubscriptionAdvancedFilterStringBeginsWithList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringBeginsWithList</a>

---

##### `stringContains`<sup>Required</sup> <a name="stringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContains"></a>

```typescript
public readonly stringContains: EventgridEventSubscriptionAdvancedFilterStringContainsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList">EventgridEventSubscriptionAdvancedFilterStringContainsList</a>

---

##### `stringEndsWith`<sup>Required</sup> <a name="stringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith"></a>

```typescript
public readonly stringEndsWith: EventgridEventSubscriptionAdvancedFilterStringEndsWithList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList">EventgridEventSubscriptionAdvancedFilterStringEndsWithList</a>

---

##### `stringIn`<sup>Required</sup> <a name="stringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringIn"></a>

```typescript
public readonly stringIn: EventgridEventSubscriptionAdvancedFilterStringInList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList">EventgridEventSubscriptionAdvancedFilterStringInList</a>

---

##### `stringNotBeginsWith`<sup>Required</sup> <a name="stringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith"></a>

```typescript
public readonly stringNotBeginsWith: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList</a>

---

##### `stringNotContains`<sup>Required</sup> <a name="stringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains"></a>

```typescript
public readonly stringNotContains: EventgridEventSubscriptionAdvancedFilterStringNotContainsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList">EventgridEventSubscriptionAdvancedFilterStringNotContainsList</a>

---

##### `stringNotEndsWith`<sup>Required</sup> <a name="stringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith"></a>

```typescript
public readonly stringNotEndsWith: EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList</a>

---

##### `stringNotIn`<sup>Required</sup> <a name="stringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn"></a>

```typescript
public readonly stringNotIn: EventgridEventSubscriptionAdvancedFilterStringNotInList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList">EventgridEventSubscriptionAdvancedFilterStringNotInList</a>

---

##### `boolEqualsInput`<sup>Optional</sup> <a name="boolEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput"></a>

```typescript
public readonly boolEqualsInput: IResolvable | EventgridEventSubscriptionAdvancedFilterBoolEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals">EventgridEventSubscriptionAdvancedFilterBoolEquals</a>[]

---

##### `isNotNullInput`<sup>Optional</sup> <a name="isNotNullInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput"></a>

```typescript
public readonly isNotNullInput: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNotNull[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull">EventgridEventSubscriptionAdvancedFilterIsNotNull</a>[]

---

##### `isNullOrUndefinedInput`<sup>Optional</sup> <a name="isNullOrUndefinedInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput"></a>

```typescript
public readonly isNullOrUndefinedInput: IResolvable | EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined</a>[]

---

##### `numberGreaterThanInput`<sup>Optional</sup> <a name="numberGreaterThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput"></a>

```typescript
public readonly numberGreaterThanInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan">EventgridEventSubscriptionAdvancedFilterNumberGreaterThan</a>[]

---

##### `numberGreaterThanOrEqualsInput`<sup>Optional</sup> <a name="numberGreaterThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput"></a>

```typescript
public readonly numberGreaterThanOrEqualsInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals</a>[]

---

##### `numberInInput`<sup>Optional</sup> <a name="numberInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput"></a>

```typescript
public readonly numberInInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn">EventgridEventSubscriptionAdvancedFilterNumberIn</a>[]

---

##### `numberInRangeInput`<sup>Optional</sup> <a name="numberInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput"></a>

```typescript
public readonly numberInRangeInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange">EventgridEventSubscriptionAdvancedFilterNumberInRange</a>[]

---

##### `numberLessThanInput`<sup>Optional</sup> <a name="numberLessThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput"></a>

```typescript
public readonly numberLessThanInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan">EventgridEventSubscriptionAdvancedFilterNumberLessThan</a>[]

---

##### `numberLessThanOrEqualsInput`<sup>Optional</sup> <a name="numberLessThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput"></a>

```typescript
public readonly numberLessThanOrEqualsInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals</a>[]

---

##### `numberNotInInput`<sup>Optional</sup> <a name="numberNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput"></a>

```typescript
public readonly numberNotInInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn">EventgridEventSubscriptionAdvancedFilterNumberNotIn</a>[]

---

##### `numberNotInRangeInput`<sup>Optional</sup> <a name="numberNotInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput"></a>

```typescript
public readonly numberNotInRangeInput: IResolvable | EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange">EventgridEventSubscriptionAdvancedFilterNumberNotInRange</a>[]

---

##### `stringBeginsWithInput`<sup>Optional</sup> <a name="stringBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput"></a>

```typescript
public readonly stringBeginsWithInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]

---

##### `stringContainsInput`<sup>Optional</sup> <a name="stringContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput"></a>

```typescript
public readonly stringContainsInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]

---

##### `stringEndsWithInput`<sup>Optional</sup> <a name="stringEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput"></a>

```typescript
public readonly stringEndsWithInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]

---

##### `stringInInput`<sup>Optional</sup> <a name="stringInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput"></a>

```typescript
public readonly stringInInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]

---

##### `stringNotBeginsWithInput`<sup>Optional</sup> <a name="stringNotBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput"></a>

```typescript
public readonly stringNotBeginsWithInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]

---

##### `stringNotContainsInput`<sup>Optional</sup> <a name="stringNotContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput"></a>

```typescript
public readonly stringNotContainsInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]

---

##### `stringNotEndsWithInput`<sup>Optional</sup> <a name="stringNotEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput"></a>

```typescript
public readonly stringNotEndsWithInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]

---

##### `stringNotInInput`<sup>Optional</sup> <a name="stringNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput"></a>

```typescript
public readonly stringNotInInput: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionAdvancedFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringBeginsWith;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith">EventgridEventSubscriptionAdvancedFilterStringBeginsWith</a>

---


### EventgridEventSubscriptionAdvancedFilterStringContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringContains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains">EventgridEventSubscriptionAdvancedFilterStringContains</a>

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringEndsWith;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith">EventgridEventSubscriptionAdvancedFilterStringEndsWith</a>

---


### EventgridEventSubscriptionAdvancedFilterStringInList <a name="EventgridEventSubscriptionAdvancedFilterStringInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringIn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn">EventgridEventSubscriptionAdvancedFilterStringIn</a>

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith</a>

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotContains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotContains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains">EventgridEventSubscriptionAdvancedFilterStringNotContains</a>

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotEndsWith;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith">EventgridEventSubscriptionAdvancedFilterStringNotEndsWith</a>

---


### EventgridEventSubscriptionAdvancedFilterStringNotInList <a name="EventgridEventSubscriptionAdvancedFilterStringNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotIn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>[]

---


### EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionAdvancedFilterStringNotIn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn">EventgridEventSubscriptionAdvancedFilterStringNotIn</a>

---


### EventgridEventSubscriptionAzureFunctionEndpointOutputReference <a name="EventgridEventSubscriptionAzureFunctionEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxEventsPerBatch` <a name="resetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch"></a>

```typescript
public resetMaxEventsPerBatch(): void
```

##### `resetPreferredBatchSizeInKilobytes` <a name="resetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```typescript
public resetPreferredBatchSizeInKilobytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput">maxEventsPerBatchInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">preferredBatchSizeInKilobytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `maxEventsPerBatchInput`<sup>Optional</sup> <a name="maxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```typescript
public readonly maxEventsPerBatchInput: number;
```

- *Type:* number

---

##### `preferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```typescript
public readonly preferredBatchSizeInKilobytesInput: number;
```

- *Type:* number

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `maxEventsPerBatch`<sup>Required</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch"></a>

```typescript
public readonly maxEventsPerBatch: number;
```

- *Type:* number

---

##### `preferredBatchSizeInKilobytes`<sup>Required</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```typescript
public readonly preferredBatchSizeInKilobytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionAzureFunctionEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---


### EventgridEventSubscriptionDeadLetterIdentityOutputReference <a name="EventgridEventSubscriptionDeadLetterIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentity` <a name="resetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity"></a>

```typescript
public resetUserAssignedIdentity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput">userAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityInput`<sup>Optional</sup> <a name="userAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput"></a>

```typescript
public readonly userAssignedIdentityInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userAssignedIdentity`<sup>Required</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity"></a>

```typescript
public readonly userAssignedIdentity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionDeadLetterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---


### EventgridEventSubscriptionDeliveryIdentityOutputReference <a name="EventgridEventSubscriptionDeliveryIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentity` <a name="resetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity"></a>

```typescript
public resetUserAssignedIdentity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput">userAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity">userAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityInput`<sup>Optional</sup> <a name="userAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput"></a>

```typescript
public readonly userAssignedIdentityInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userAssignedIdentity`<sup>Required</sup> <a name="userAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity"></a>

```typescript
public readonly userAssignedIdentity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionDeliveryIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---


### EventgridEventSubscriptionDeliveryPropertyList <a name="EventgridEventSubscriptionDeliveryPropertyList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get"></a>

```typescript
public get(index: number): EventgridEventSubscriptionDeliveryPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionDeliveryProperty[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>[]

---


### EventgridEventSubscriptionDeliveryPropertyOutputReference <a name="EventgridEventSubscriptionDeliveryPropertyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetSourceField` <a name="resetSourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSourceField"></a>

```typescript
public resetSourceField(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput">secretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput">sourceFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret">secret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField">sourceField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceFieldInput`<sup>Optional</sup> <a name="sourceFieldInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput"></a>

```typescript
public readonly sourceFieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceField`<sup>Required</sup> <a name="sourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField"></a>

```typescript
public readonly sourceField: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionDeliveryProperty;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty">EventgridEventSubscriptionDeliveryProperty</a>

---


### EventgridEventSubscriptionRetryPolicyOutputReference <a name="EventgridEventSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput">eventTimeToLiveInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput">maxDeliveryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive">eventTimeToLive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTimeToLiveInput`<sup>Optional</sup> <a name="eventTimeToLiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput"></a>

```typescript
public readonly eventTimeToLiveInput: number;
```

- *Type:* number

---

##### `maxDeliveryAttemptsInput`<sup>Optional</sup> <a name="maxDeliveryAttemptsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```typescript
public readonly maxDeliveryAttemptsInput: number;
```

- *Type:* number

---

##### `eventTimeToLive`<sup>Required</sup> <a name="eventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive"></a>

```typescript
public readonly eventTimeToLive: number;
```

- *Type:* number

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts"></a>

```typescript
public readonly maxDeliveryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---


### EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput">storageBlobContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName">storageBlobContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `storageBlobContainerNameInput`<sup>Optional</sup> <a name="storageBlobContainerNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput"></a>

```typescript
public readonly storageBlobContainerNameInput: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `storageBlobContainerName`<sup>Required</sup> <a name="storageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName"></a>

```typescript
public readonly storageBlobContainerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionStorageBlobDeadLetterDestination;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---


### EventgridEventSubscriptionStorageQueueEndpointOutputReference <a name="EventgridEventSubscriptionStorageQueueEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueueMessageTimeToLiveInSeconds` <a name="resetQueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds"></a>

```typescript
public resetQueueMessageTimeToLiveInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput">queueMessageTimeToLiveInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds">queueMessageTimeToLiveInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueMessageTimeToLiveInSecondsInput`<sup>Optional</sup> <a name="queueMessageTimeToLiveInSecondsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput"></a>

```typescript
public readonly queueMessageTimeToLiveInSecondsInput: number;
```

- *Type:* number

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `queueMessageTimeToLiveInSeconds`<sup>Required</sup> <a name="queueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds"></a>

```typescript
public readonly queueMessageTimeToLiveInSeconds: number;
```

- *Type:* number

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionStorageQueueEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---


### EventgridEventSubscriptionSubjectFilterOutputReference <a name="EventgridEventSubscriptionSubjectFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```

##### `resetSubjectBeginsWith` <a name="resetSubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith"></a>

```typescript
public resetSubjectBeginsWith(): void
```

##### `resetSubjectEndsWith` <a name="resetSubjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith"></a>

```typescript
public resetSubjectEndsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput">subjectBeginsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput">subjectEndsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith">subjectEndsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectBeginsWithInput`<sup>Optional</sup> <a name="subjectBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput"></a>

```typescript
public readonly subjectBeginsWithInput: string;
```

- *Type:* string

---

##### `subjectEndsWithInput`<sup>Optional</sup> <a name="subjectEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput"></a>

```typescript
public readonly subjectEndsWithInput: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectBeginsWith`<sup>Required</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith"></a>

```typescript
public readonly subjectBeginsWith: string;
```

- *Type:* string

---

##### `subjectEndsWith`<sup>Required</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith"></a>

```typescript
public readonly subjectEndsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionSubjectFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---


### EventgridEventSubscriptionTimeoutsOutputReference <a name="EventgridEventSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventgridEventSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

---


### EventgridEventSubscriptionWebhookEndpointOutputReference <a name="EventgridEventSubscriptionWebhookEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer"></a>

```typescript
import { eventgridEventSubscription } from '@cdktf/provider-azurerm'

new eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryAppIdOrUri` <a name="resetActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri"></a>

```typescript
public resetActiveDirectoryAppIdOrUri(): void
```

##### `resetActiveDirectoryTenantId` <a name="resetActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId"></a>

```typescript
public resetActiveDirectoryTenantId(): void
```

##### `resetMaxEventsPerBatch` <a name="resetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch"></a>

```typescript
public resetMaxEventsPerBatch(): void
```

##### `resetPreferredBatchSizeInKilobytes` <a name="resetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```typescript
public resetPreferredBatchSizeInKilobytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput">activeDirectoryAppIdOrUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput">activeDirectoryTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput">maxEventsPerBatchInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">preferredBatchSizeInKilobytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri">activeDirectoryAppIdOrUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId">activeDirectoryTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch">maxEventsPerBatch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes">preferredBatchSizeInKilobytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `activeDirectoryAppIdOrUriInput`<sup>Optional</sup> <a name="activeDirectoryAppIdOrUriInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput"></a>

```typescript
public readonly activeDirectoryAppIdOrUriInput: string;
```

- *Type:* string

---

##### `activeDirectoryTenantIdInput`<sup>Optional</sup> <a name="activeDirectoryTenantIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput"></a>

```typescript
public readonly activeDirectoryTenantIdInput: string;
```

- *Type:* string

---

##### `maxEventsPerBatchInput`<sup>Optional</sup> <a name="maxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```typescript
public readonly maxEventsPerBatchInput: number;
```

- *Type:* number

---

##### `preferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="preferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```typescript
public readonly preferredBatchSizeInKilobytesInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `activeDirectoryAppIdOrUri`<sup>Required</sup> <a name="activeDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri"></a>

```typescript
public readonly activeDirectoryAppIdOrUri: string;
```

- *Type:* string

---

##### `activeDirectoryTenantId`<sup>Required</sup> <a name="activeDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId"></a>

```typescript
public readonly activeDirectoryTenantId: string;
```

- *Type:* string

---

##### `maxEventsPerBatch`<sup>Required</sup> <a name="maxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch"></a>

```typescript
public readonly maxEventsPerBatch: number;
```

- *Type:* number

---

##### `preferredBatchSizeInKilobytes`<sup>Required</sup> <a name="preferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```typescript
public readonly preferredBatchSizeInKilobytes: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventgridEventSubscriptionWebhookEndpoint;
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---



