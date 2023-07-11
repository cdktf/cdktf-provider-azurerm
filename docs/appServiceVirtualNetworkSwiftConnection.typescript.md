# `azurerm_app_service_virtual_network_swift_connection`

Refer to the Terraform Registory for docs: [`azurerm_app_service_virtual_network_swift_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection).

# `appServiceVirtualNetworkSwiftConnection` Submodule <a name="`appServiceVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceVirtualNetworkSwiftConnection <a name="AppServiceVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection azurerm_app_service_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

new appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection(scope: Construct, id: string, config: AppServiceVirtualNetworkSwiftConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceVirtualNetworkSwiftConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput">appServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId">appServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `appServiceIdInput`<sup>Optional</sup> <a name="appServiceIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```typescript
public readonly appServiceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceVirtualNetworkSwiftConnectionConfig <a name="AppServiceVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

const appServiceVirtualNetworkSwiftConnectionConfig: appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId">appServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appServiceId`<sup>Required</sup> <a name="appServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```typescript
public readonly appServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#timeouts AppServiceVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

const appServiceVirtualNetworkSwiftConnectionTimeouts: appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceVirtualNetworkSwiftConnection } from '@cdktf/provider-azurerm'

new appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceVirtualNetworkSwiftConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

---



