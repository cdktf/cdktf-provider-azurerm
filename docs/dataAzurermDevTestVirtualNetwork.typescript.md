# `data_azurerm_dev_test_virtual_network`

Refer to the Terraform Registory for docs: [`data_azurerm_dev_test_virtual_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network).

# `dataAzurermDevTestVirtualNetwork` Submodule <a name="`dataAzurermDevTestVirtualNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevTestVirtualNetwork <a name="DataAzurermDevTestVirtualNetwork" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network azurerm_dev_test_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork(scope: Construct, id: string, config: DataAzurermDevTestVirtualNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig">DataAzurermDevTestVirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig">DataAzurermDevTestVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDevTestVirtualNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.allowedSubnets">allowedSubnets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList">DataAzurermDevTestVirtualNetworkAllowedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.subnetOverrides">subnetOverrides</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList">DataAzurermDevTestVirtualNetworkSubnetOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference">DataAzurermDevTestVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labNameInput">labNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labName">labName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedSubnets`<sup>Required</sup> <a name="allowedSubnets" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.allowedSubnets"></a>

```typescript
public readonly allowedSubnets: DataAzurermDevTestVirtualNetworkAllowedSubnetsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList">DataAzurermDevTestVirtualNetworkAllowedSubnetsList</a>

---

##### `subnetOverrides`<sup>Required</sup> <a name="subnetOverrides" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.subnetOverrides"></a>

```typescript
public readonly subnetOverrides: DataAzurermDevTestVirtualNetworkSubnetOverridesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList">DataAzurermDevTestVirtualNetworkSubnetOverridesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDevTestVirtualNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference">DataAzurermDevTestVirtualNetworkTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.uniqueIdentifier"></a>

```typescript
public readonly uniqueIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labNameInput"></a>

```typescript
public readonly labNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDevTestVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevTestVirtualNetworkAllowedSubnets <a name="DataAzurermDevTestVirtualNetworkAllowedSubnets" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

const dataAzurermDevTestVirtualNetworkAllowedSubnets: dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets = { ... }
```


### DataAzurermDevTestVirtualNetworkConfig <a name="DataAzurermDevTestVirtualNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

const dataAzurermDevTestVirtualNetworkConfig: dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.labName">labName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#lab_name DataAzurermDevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#name DataAzurermDevTestVirtualNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#id DataAzurermDevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDevTestVirtualNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#timeouts DataAzurermDevTestVirtualNetwork#timeouts}

---

### DataAzurermDevTestVirtualNetworkSubnetOverrides <a name="DataAzurermDevTestVirtualNetworkSubnetOverrides" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

const dataAzurermDevTestVirtualNetworkSubnetOverrides: dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides = { ... }
```


### DataAzurermDevTestVirtualNetworkTimeouts <a name="DataAzurermDevTestVirtualNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

const dataAzurermDevTestVirtualNetworkTimeouts: dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#read DataAzurermDevTestVirtualNetwork#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/dev_test_virtual_network#read DataAzurermDevTestVirtualNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevTestVirtualNetworkAllowedSubnetsList <a name="DataAzurermDevTestVirtualNetworkAllowedSubnetsList" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get"></a>

```typescript
public get(index: number): DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference <a name="DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.allowPublicIp">allowPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.labSubnetName">labSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets">DataAzurermDevTestVirtualNetworkAllowedSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPublicIp`<sup>Required</sup> <a name="allowPublicIp" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.allowPublicIp"></a>

```typescript
public readonly allowPublicIp: string;
```

- *Type:* string

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.labSubnetName"></a>

```typescript
public readonly labSubnetName: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermDevTestVirtualNetworkAllowedSubnets;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkAllowedSubnets">DataAzurermDevTestVirtualNetworkAllowedSubnets</a>

---


### DataAzurermDevTestVirtualNetworkSubnetOverridesList <a name="DataAzurermDevTestVirtualNetworkSubnetOverridesList" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get"></a>

```typescript
public get(index: number): DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference <a name="DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.labSubnetName">labSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.useInVmCreationPermission">useInVmCreationPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.usePublicIpAddressPermission">usePublicIpAddressPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.virtualNetworkPoolName">virtualNetworkPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides">DataAzurermDevTestVirtualNetworkSubnetOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.labSubnetName"></a>

```typescript
public readonly labSubnetName: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `useInVmCreationPermission`<sup>Required</sup> <a name="useInVmCreationPermission" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.useInVmCreationPermission"></a>

```typescript
public readonly useInVmCreationPermission: string;
```

- *Type:* string

---

##### `usePublicIpAddressPermission`<sup>Required</sup> <a name="usePublicIpAddressPermission" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.usePublicIpAddressPermission"></a>

```typescript
public readonly usePublicIpAddressPermission: string;
```

- *Type:* string

---

##### `virtualNetworkPoolName`<sup>Required</sup> <a name="virtualNetworkPoolName" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.virtualNetworkPoolName"></a>

```typescript
public readonly virtualNetworkPoolName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermDevTestVirtualNetworkSubnetOverrides;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkSubnetOverrides">DataAzurermDevTestVirtualNetworkSubnetOverrides</a>

---


### DataAzurermDevTestVirtualNetworkTimeoutsOutputReference <a name="DataAzurermDevTestVirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDevTestVirtualNetwork } from '@cdktf/provider-azurerm'

new dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDevTestVirtualNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDevTestVirtualNetwork.DataAzurermDevTestVirtualNetworkTimeouts">DataAzurermDevTestVirtualNetworkTimeouts</a>

---



