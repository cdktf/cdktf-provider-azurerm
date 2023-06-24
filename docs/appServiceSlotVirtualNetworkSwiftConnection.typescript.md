# `azurerm_app_service_slot_virtual_network_swift_connection`

Refer to the Terraform Registory for docs: [`azurerm_app_service_slot_virtual_network_swift_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection).

# `appServiceSlotVirtualNetworkSwiftConnection` Submodule <a name="`appServiceSlotVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlotVirtualNetworkSwiftConnection <a name="AppServiceSlotVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection azurerm_app_service_slot_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

new appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection(scope: Construct, id: string, config: AppServiceSlotVirtualNetworkSwiftConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput">appServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput">slotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId">appServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName">slotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `appServiceIdInput`<sup>Optional</sup> <a name="appServiceIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```typescript
public readonly appServiceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput"></a>

```typescript
public readonly slotNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceSlotVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionConfig <a name="AppServiceSlotVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

const appServiceSlotVirtualNetworkSwiftConnectionConfig: appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId">appServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName">slotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}.

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceSlotVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#timeouts AppServiceSlotVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceSlotVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

const appServiceSlotVirtualNetworkSwiftConnectionTimeouts: appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceSlotVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

new appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceSlotVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

---



