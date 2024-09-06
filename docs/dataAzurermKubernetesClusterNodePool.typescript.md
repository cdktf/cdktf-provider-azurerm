# `dataAzurermKubernetesClusterNodePool` Submodule <a name="`dataAzurermKubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesClusterNodePool <a name="DataAzurermKubernetesClusterNodePool" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool(scope: Construct, id: string, config: DataAzurermKubernetesClusterNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig">DataAzurermKubernetesClusterNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig">DataAzurermKubernetesClusterNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermKubernetesClusterNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKubernetesClusterNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermKubernetesClusterNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKubernetesClusterNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKubernetesClusterNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesClusterNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount">minCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels">nodeLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints">nodeTaints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion">orchestratorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType">osDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice">spotMaxPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId">vnetSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput">kubernetesClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName">kubernetesClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.autoScalingEnabled"></a>

```typescript
public readonly autoScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodeLabels`<sup>Required</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels"></a>

```typescript
public readonly nodeLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `nodePublicIpEnabled`<sup>Required</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpEnabled"></a>

```typescript
public readonly nodePublicIpEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nodePublicIpPrefixId`<sup>Required</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```typescript
public readonly nodePublicIpPrefixId: string;
```

- *Type:* string

---

##### `nodeTaints`<sup>Required</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints"></a>

```typescript
public readonly nodeTaints: string[];
```

- *Type:* string[]

---

##### `orchestratorVersion`<sup>Required</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion"></a>

```typescript
public readonly orchestratorVersion: string;
```

- *Type:* string

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb"></a>

```typescript
public readonly osDiskSizeGb: number;
```

- *Type:* number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType"></a>

```typescript
public readonly osDiskType: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```typescript
public readonly proximityPlacementGroupId: string;
```

- *Type:* string

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice"></a>

```typescript
public readonly spotMaxPrice: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings"></a>

```typescript
public readonly upgradeSettings: DataAzurermKubernetesClusterNodePoolUpgradeSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `vnetSubnetId`<sup>Required</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId"></a>

```typescript
public readonly vnetSubnetId: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesClusterNameInput`<sup>Optional</sup> <a name="kubernetesClusterNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput"></a>

```typescript
public readonly kubernetesClusterNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermKubernetesClusterNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesClusterName`<sup>Required</sup> <a name="kubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName"></a>

```typescript
public readonly kubernetesClusterName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesClusterNodePoolConfig <a name="DataAzurermKubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterNodePoolConfig: dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName">kubernetesClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubernetesClusterName`<sup>Required</sup> <a name="kubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName"></a>

```typescript
public readonly kubernetesClusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesClusterNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#timeouts DataAzurermKubernetesClusterNodePool#timeouts}

---

### DataAzurermKubernetesClusterNodePoolTimeouts <a name="DataAzurermKubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterNodePoolTimeouts: dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}.

---

### DataAzurermKubernetesClusterNodePoolUpgradeSettings <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterNodePoolUpgradeSettings: dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference <a name="DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermKubernetesClusterNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsList <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsList" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesClusterNodePool } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes">drainTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes">nodeSoakDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainTimeoutInMinutes`<sup>Required</sup> <a name="drainTimeoutInMinutes" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes"></a>

```typescript
public readonly drainTimeoutInMinutes: number;
```

- *Type:* number

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```typescript
public readonly maxSurge: string;
```

- *Type:* string

---

##### `nodeSoakDurationInMinutes`<sup>Required</sup> <a name="nodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes"></a>

```typescript
public readonly nodeSoakDurationInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterNodePoolUpgradeSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a>

---



