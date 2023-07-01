# `azurerm_iot_time_series_insights_event_source_eventhub`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_event_source_eventhub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub).

# `iotTimeSeriesInsightsEventSourceEventhub` Submodule <a name="`iotTimeSeriesInsightsEventSourceEventhub` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsEventSourceEventhub <a name="IotTimeSeriesInsightsEventSourceEventhub" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub azurerm_iot_time_series_insights_event_source_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub(scope: Construct, id: string, config: IotTimeSeriesInsightsEventSourceEventhubConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig">IotTimeSeriesInsightsEventSourceEventhubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig">IotTimeSeriesInsightsEventSourceEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimestampPropertyName">resetTimestampPropertyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts"></a>

```typescript
public putTimeouts(value: IotTimeSeriesInsightsEventSourceEventhubTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimestampPropertyName` <a name="resetTimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimestampPropertyName"></a>

```typescript
public resetTimestampPropertyName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupNameInput">consumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubNameInput">eventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceIdInput">eventSourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyInput">sharedAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyNameInput">sharedAccessKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyNameInput">timestampPropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupName">consumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubName">eventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceId">eventSourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKey">sharedAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyName">sharedAccessKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyName">timestampPropertyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference</a>

---

##### `consumerGroupNameInput`<sup>Optional</sup> <a name="consumerGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupNameInput"></a>

```typescript
public readonly consumerGroupNameInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubNameInput"></a>

```typescript
public readonly eventhubNameInput: string;
```

- *Type:* string

---

##### `eventSourceResourceIdInput`<sup>Optional</sup> <a name="eventSourceResourceIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceIdInput"></a>

```typescript
public readonly eventSourceResourceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `sharedAccessKeyInput`<sup>Optional</sup> <a name="sharedAccessKeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyInput"></a>

```typescript
public readonly sharedAccessKeyInput: string;
```

- *Type:* string

---

##### `sharedAccessKeyNameInput`<sup>Optional</sup> <a name="sharedAccessKeyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyNameInput"></a>

```typescript
public readonly sharedAccessKeyNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotTimeSeriesInsightsEventSourceEventhubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

---

##### `timestampPropertyNameInput`<sup>Optional</sup> <a name="timestampPropertyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyNameInput"></a>

```typescript
public readonly timestampPropertyNameInput: string;
```

- *Type:* string

---

##### `consumerGroupName`<sup>Required</sup> <a name="consumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupName"></a>

```typescript
public readonly consumerGroupName: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

---

##### `eventSourceResourceId`<sup>Required</sup> <a name="eventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceId"></a>

```typescript
public readonly eventSourceResourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `sharedAccessKey`<sup>Required</sup> <a name="sharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKey"></a>

```typescript
public readonly sharedAccessKey: string;
```

- *Type:* string

---

##### `sharedAccessKeyName`<sup>Required</sup> <a name="sharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyName"></a>

```typescript
public readonly sharedAccessKeyName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timestampPropertyName`<sup>Required</sup> <a name="timestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyName"></a>

```typescript
public readonly timestampPropertyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsEventSourceEventhubConfig <a name="IotTimeSeriesInsightsEventSourceEventhubConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsEventSourceEventhubConfig: iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.consumerGroupName">consumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#consumer_group_name IotTimeSeriesInsightsEventSourceEventhub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#environment_id IotTimeSeriesInsightsEventSourceEventhub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventhubName">eventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#eventhub_name IotTimeSeriesInsightsEventSourceEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventSourceResourceId">eventSourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#event_source_resource_id IotTimeSeriesInsightsEventSourceEventhub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#location IotTimeSeriesInsightsEventSourceEventhub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#name IotTimeSeriesInsightsEventSourceEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#namespace_name IotTimeSeriesInsightsEventSourceEventhub#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKey">sharedAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key IotTimeSeriesInsightsEventSourceEventhub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKeyName">sharedAccessKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key_name IotTimeSeriesInsightsEventSourceEventhub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#id IotTimeSeriesInsightsEventSourceEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#tags IotTimeSeriesInsightsEventSourceEventhub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timestampPropertyName">timestampPropertyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#timestamp_property_name IotTimeSeriesInsightsEventSourceEventhub#timestamp_property_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumerGroupName`<sup>Required</sup> <a name="consumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.consumerGroupName"></a>

```typescript
public readonly consumerGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#consumer_group_name IotTimeSeriesInsightsEventSourceEventhub#consumer_group_name}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#environment_id IotTimeSeriesInsightsEventSourceEventhub#environment_id}.

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#eventhub_name IotTimeSeriesInsightsEventSourceEventhub#eventhub_name}.

---

##### `eventSourceResourceId`<sup>Required</sup> <a name="eventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventSourceResourceId"></a>

```typescript
public readonly eventSourceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#event_source_resource_id IotTimeSeriesInsightsEventSourceEventhub#event_source_resource_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#location IotTimeSeriesInsightsEventSourceEventhub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#name IotTimeSeriesInsightsEventSourceEventhub#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#namespace_name IotTimeSeriesInsightsEventSourceEventhub#namespace_name}.

---

##### `sharedAccessKey`<sup>Required</sup> <a name="sharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKey"></a>

```typescript
public readonly sharedAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key IotTimeSeriesInsightsEventSourceEventhub#shared_access_key}.

---

##### `sharedAccessKeyName`<sup>Required</sup> <a name="sharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKeyName"></a>

```typescript
public readonly sharedAccessKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key_name IotTimeSeriesInsightsEventSourceEventhub#shared_access_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#id IotTimeSeriesInsightsEventSourceEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#tags IotTimeSeriesInsightsEventSourceEventhub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsEventSourceEventhubTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#timeouts IotTimeSeriesInsightsEventSourceEventhub#timeouts}

---

##### `timestampPropertyName`<sup>Optional</sup> <a name="timestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timestampPropertyName"></a>

```typescript
public readonly timestampPropertyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#timestamp_property_name IotTimeSeriesInsightsEventSourceEventhub#timestamp_property_name}.

---

### IotTimeSeriesInsightsEventSourceEventhubTimeouts <a name="IotTimeSeriesInsightsEventSourceEventhubTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsEventSourceEventhubTimeouts: iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#create IotTimeSeriesInsightsEventSourceEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#delete IotTimeSeriesInsightsEventSourceEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#read IotTimeSeriesInsightsEventSourceEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#update IotTimeSeriesInsightsEventSourceEventhub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#create IotTimeSeriesInsightsEventSourceEventhub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#delete IotTimeSeriesInsightsEventSourceEventhub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#read IotTimeSeriesInsightsEventSourceEventhub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/iot_time_series_insights_event_source_eventhub#update IotTimeSeriesInsightsEventSourceEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference <a name="IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsEventSourceEventhub } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTimeSeriesInsightsEventSourceEventhubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

---



