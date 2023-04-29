# `azurerm_iothub_endpoint_servicebus_queue`

Refer to the Terraform Registory for docs: [`azurerm_iothub_endpoint_servicebus_queue`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue).

# `iothubEndpointServicebusQueue` Submodule <a name="`iothubEndpointServicebusQueue` Submodule" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointServicebusQueue <a name="IothubEndpointServicebusQueue" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue azurerm_iothub_endpoint_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

new iothubEndpointServicebusQueue.IothubEndpointServicebusQueue(scope: Construct, id: string, config: IothubEndpointServicebusQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig">IothubEndpointServicebusQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig">IothubEndpointServicebusQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetEntityPath">resetEntityPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.putTimeouts"></a>

```typescript
public putTimeouts(value: IothubEndpointServicebusQueueTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetEndpointUri"></a>

```typescript
public resetEndpointUri(): void
```

##### `resetEntityPath` <a name="resetEntityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetEntityPath"></a>

```typescript
public resetEntityPath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isConstruct"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformElement"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformResource"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference">IothubEndpointServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.entityPathInput">entityPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.iothubIdInput">iothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.entityPath">entityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.iothubId">iothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointServicebusQueueTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference">IothubEndpointServicebusQueueTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `entityPathInput`<sup>Optional</sup> <a name="entityPathInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.entityPathInput"></a>

```typescript
public readonly entityPathInput: string;
```

- *Type:* string

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.iothubIdInput"></a>

```typescript
public readonly iothubIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IothubEndpointServicebusQueueTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a> | cdktf.IResolvable

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `entityPath`<sup>Required</sup> <a name="entityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.entityPath"></a>

```typescript
public readonly entityPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointServicebusQueueConfig <a name="IothubEndpointServicebusQueueConfig" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.Initializer"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

const iothubEndpointServicebusQueueConfig: iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.iothubId">iothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#iothub_id IothubEndpointServicebusQueue#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#name IothubEndpointServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#resource_group_name IothubEndpointServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#authentication_type IothubEndpointServicebusQueue#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#connection_string IothubEndpointServicebusQueue#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.endpointUri">endpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#endpoint_uri IothubEndpointServicebusQueue#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.entityPath">entityPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#entity_path IothubEndpointServicebusQueue#entity_path}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#id IothubEndpointServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#identity_id IothubEndpointServicebusQueue#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#iothub_id IothubEndpointServicebusQueue#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#name IothubEndpointServicebusQueue#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#resource_group_name IothubEndpointServicebusQueue#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#authentication_type IothubEndpointServicebusQueue#authentication_type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#connection_string IothubEndpointServicebusQueue#connection_string}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#endpoint_uri IothubEndpointServicebusQueue#endpoint_uri}.

---

##### `entityPath`<sup>Optional</sup> <a name="entityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.entityPath"></a>

```typescript
public readonly entityPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#entity_path IothubEndpointServicebusQueue#entity_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#id IothubEndpointServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#identity_id IothubEndpointServicebusQueue#identity_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointServicebusQueueTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#timeouts IothubEndpointServicebusQueue#timeouts}

---

### IothubEndpointServicebusQueueTimeouts <a name="IothubEndpointServicebusQueueTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.Initializer"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

const iothubEndpointServicebusQueueTimeouts: iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#create IothubEndpointServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#delete IothubEndpointServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#read IothubEndpointServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#update IothubEndpointServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#create IothubEndpointServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#delete IothubEndpointServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#read IothubEndpointServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/iothub_endpoint_servicebus_queue#update IothubEndpointServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointServicebusQueueTimeoutsOutputReference <a name="IothubEndpointServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.Initializer"></a>

```typescript
import { iothubEndpointServicebusQueue } from '@cdktf/provider-azurerm'

new iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IothubEndpointServicebusQueueTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusQueue.IothubEndpointServicebusQueueTimeouts">IothubEndpointServicebusQueueTimeouts</a> | cdktf.IResolvable

---



