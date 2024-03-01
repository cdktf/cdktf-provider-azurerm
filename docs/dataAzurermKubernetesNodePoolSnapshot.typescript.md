# `dataAzurermKubernetesNodePoolSnapshot` Submodule <a name="`dataAzurermKubernetesNodePoolSnapshot` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesNodePoolSnapshot <a name="DataAzurermKubernetesNodePoolSnapshot" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot azurerm_kubernetes_node_pool_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot(scope: Construct, id: string, config: DataAzurermKubernetesNodePoolSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig">DataAzurermKubernetesNodePoolSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig">DataAzurermKubernetesNodePoolSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermKubernetesNodePoolSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKubernetesNodePoolSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKubernetesNodePoolSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesNodePoolSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId">sourceNodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `sourceNodePoolId`<sup>Required</sup> <a name="sourceNodePoolId" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId"></a>

```typescript
public readonly sourceNodePoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermKubernetesNodePoolSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesNodePoolSnapshotConfig <a name="DataAzurermKubernetesNodePoolSnapshotConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.Initializer"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesNodePoolSnapshotConfig: dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesNodePoolSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#timeouts DataAzurermKubernetesNodePoolSnapshot#timeouts}

---

### DataAzurermKubernetesNodePoolSnapshotTimeouts <a name="DataAzurermKubernetesNodePoolSnapshotTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.Initializer"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesNodePoolSnapshotTimeouts: dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference <a name="DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesNodePoolSnapshot } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermKubernetesNodePoolSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---



