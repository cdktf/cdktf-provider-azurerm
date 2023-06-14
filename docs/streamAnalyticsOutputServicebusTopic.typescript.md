# `azurerm_stream_analytics_output_servicebus_topic`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_output_servicebus_topic`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic).

# `streamAnalyticsOutputServicebusTopic` Submodule <a name="`streamAnalyticsOutputServicebusTopic` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputServicebusTopic <a name="StreamAnalyticsOutputServicebusTopic" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic azurerm_stream_analytics_output_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic(scope: Construct, id: string, config: StreamAnalyticsOutputServicebusTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig">StreamAnalyticsOutputServicebusTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig">StreamAnalyticsOutputServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetPropertyColumns">resetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSystemPropertyColumns">resetSystemPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization"></a>

```typescript
public putSerialization(value: StreamAnalyticsOutputServicebusTopicSerialization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputServicebusTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPropertyColumns` <a name="resetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetPropertyColumns"></a>

```typescript
public resetPropertyColumns(): void
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyKey"></a>

```typescript
public resetSharedAccessPolicyKey(): void
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyName"></a>

```typescript
public resetSharedAccessPolicyName(): void
```

##### `resetSystemPropertyColumns` <a name="resetSystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSystemPropertyColumns"></a>

```typescript
public resetSystemPropertyColumns(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference">StreamAnalyticsOutputServicebusTopicSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference">StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumnsInput">propertyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumnsInput">systemPropertyColumnsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumns">propertyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputServicebusTopicSerializationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference">StreamAnalyticsOutputServicebusTopicSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference">StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertyColumnsInput`<sup>Optional</sup> <a name="propertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumnsInput"></a>

```typescript
public readonly propertyColumnsInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serializationInput"></a>

```typescript
public readonly serializationInput: StreamAnalyticsOutputServicebusTopicSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespaceInput"></a>

```typescript
public readonly servicebusNamespaceInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKeyInput"></a>

```typescript
public readonly sharedAccessPolicyKeyInput: string;
```

- *Type:* string

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyNameInput"></a>

```typescript
public readonly sharedAccessPolicyNameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `systemPropertyColumnsInput`<sup>Optional</sup> <a name="systemPropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumnsInput"></a>

```typescript
public readonly systemPropertyColumnsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: StreamAnalyticsOutputServicebusTopicTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a> | cdktf.IResolvable

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propertyColumns`<sup>Required</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumns"></a>

```typescript
public readonly propertyColumns: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

##### `systemPropertyColumns`<sup>Required</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumns"></a>

```typescript
public readonly systemPropertyColumns: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputServicebusTopicConfig <a name="StreamAnalyticsOutputServicebusTopicConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusTopicConfig: streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#name StreamAnalyticsOutputServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#resource_group_name StreamAnalyticsOutputServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.servicebusNamespace">servicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#servicebus_namespace StreamAnalyticsOutputServicebusTopic#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#stream_analytics_job_name StreamAnalyticsOutputServicebusTopic#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.topicName">topicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#topic_name StreamAnalyticsOutputServicebusTopic#topic_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#authentication_mode StreamAnalyticsOutputServicebusTopic#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#id StreamAnalyticsOutputServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.propertyColumns">propertyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#property_columns StreamAnalyticsOutputServicebusTopic#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_key StreamAnalyticsOutputServicebusTopic#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_name StreamAnalyticsOutputServicebusTopic#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#system_property_columns StreamAnalyticsOutputServicebusTopic#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#name StreamAnalyticsOutputServicebusTopic#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#resource_group_name StreamAnalyticsOutputServicebusTopic#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.serialization"></a>

```typescript
public readonly serialization: StreamAnalyticsOutputServicebusTopicSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#serialization StreamAnalyticsOutputServicebusTopic#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.servicebusNamespace"></a>

```typescript
public readonly servicebusNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#servicebus_namespace StreamAnalyticsOutputServicebusTopic#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#stream_analytics_job_name StreamAnalyticsOutputServicebusTopic#stream_analytics_job_name}.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#topic_name StreamAnalyticsOutputServicebusTopic#topic_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#authentication_mode StreamAnalyticsOutputServicebusTopic#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#id StreamAnalyticsOutputServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.propertyColumns"></a>

```typescript
public readonly propertyColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#property_columns StreamAnalyticsOutputServicebusTopic#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyKey"></a>

```typescript
public readonly sharedAccessPolicyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_key StreamAnalyticsOutputServicebusTopic#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyName"></a>

```typescript
public readonly sharedAccessPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_name StreamAnalyticsOutputServicebusTopic#shared_access_policy_name}.

---

##### `systemPropertyColumns`<sup>Optional</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.systemPropertyColumns"></a>

```typescript
public readonly systemPropertyColumns: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#system_property_columns StreamAnalyticsOutputServicebusTopic#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputServicebusTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#timeouts StreamAnalyticsOutputServicebusTopic#timeouts}

---

### StreamAnalyticsOutputServicebusTopicSerialization <a name="StreamAnalyticsOutputServicebusTopicSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusTopicSerialization: streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#type StreamAnalyticsOutputServicebusTopic#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#encoding StreamAnalyticsOutputServicebusTopic#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#field_delimiter StreamAnalyticsOutputServicebusTopic#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#format StreamAnalyticsOutputServicebusTopic#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#type StreamAnalyticsOutputServicebusTopic#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#encoding StreamAnalyticsOutputServicebusTopic#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#field_delimiter StreamAnalyticsOutputServicebusTopic#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#format StreamAnalyticsOutputServicebusTopic#format}.

---

### StreamAnalyticsOutputServicebusTopicTimeouts <a name="StreamAnalyticsOutputServicebusTopicTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputServicebusTopicTimeouts: streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#create StreamAnalyticsOutputServicebusTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#delete StreamAnalyticsOutputServicebusTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#read StreamAnalyticsOutputServicebusTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#update StreamAnalyticsOutputServicebusTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#create StreamAnalyticsOutputServicebusTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#delete StreamAnalyticsOutputServicebusTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#read StreamAnalyticsOutputServicebusTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/stream_analytics_output_servicebus_topic#update StreamAnalyticsOutputServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputServicebusTopicSerializationOutputReference <a name="StreamAnalyticsOutputServicebusTopicSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsOutputServicebusTopicSerialization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---


### StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference <a name="StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputServicebusTopic } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamAnalyticsOutputServicebusTopicTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a> | cdktf.IResolvable

---



