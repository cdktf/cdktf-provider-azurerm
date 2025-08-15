# `dataAzurermOracleDbNodes` Submodule <a name="`dataAzurermOracleDbNodes` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDbNodes <a name="DataAzurermOracleDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes azurerm_oracle_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbNodes.DataAzurermOracleDbNodes(scope: Construct, id: string, config: DataAzurermOracleDbNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig">DataAzurermOracleDbNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig">DataAzurermOracleDbNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleDbNodesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermOracleDbNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleDbNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.dbNodes"></a>

```typescript
public readonly dbNodes: DataAzurermOracleDbNodesDbNodesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList">DataAzurermOracleDbNodesDbNodesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDbNodesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference">DataAzurermOracleDbNodesTimeoutsOutputReference</a>

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleDbNodesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDbNodesConfig <a name="DataAzurermOracleDbNodesConfig" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbNodesConfig: dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#cloud_vm_cluster_id DataAzurermOracleDbNodes#cloud_vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#id DataAzurermOracleDbNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDbNodesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#timeouts DataAzurermOracleDbNodes#timeouts}

---

### DataAzurermOracleDbNodesDbNodes <a name="DataAzurermOracleDbNodesDbNodes" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbNodesDbNodes: dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes = { ... }
```


### DataAzurermOracleDbNodesTimeouts <a name="DataAzurermOracleDbNodesTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbNodesTimeouts: dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/oracle_db_nodes#read DataAzurermOracleDbNodes#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDbNodesDbNodesList <a name="DataAzurermOracleDbNodesDbNodesList" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get"></a>

```typescript
public get(index: number): DataAzurermOracleDbNodesDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermOracleDbNodesDbNodesOutputReference <a name="DataAzurermOracleDbNodesDbNodesOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId">backupIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id">backupVnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId">backupVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId">hostIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb">softwareStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id">vnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: string;
```

- *Type:* string

---

##### `backupIpId`<sup>Required</sup> <a name="backupIpId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupIpId"></a>

```typescript
public readonly backupIpId: string;
```

- *Type:* string

---

##### `backupVnic2Id`<sup>Required</sup> <a name="backupVnic2Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnic2Id"></a>

```typescript
public readonly backupVnic2Id: string;
```

- *Type:* string

---

##### `backupVnicId`<sup>Required</sup> <a name="backupVnicId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.backupVnicId"></a>

```typescript
public readonly backupVnicId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `hostIpId`<sup>Required</sup> <a name="hostIpId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostIpId"></a>

```typescript
public readonly hostIpId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `softwareStorageSizeInGb`<sup>Required</sup> <a name="softwareStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.softwareStorageSizeInGb"></a>

```typescript
public readonly softwareStorageSizeInGb: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd"></a>

```typescript
public readonly timeMaintenanceWindowEnd: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart"></a>

```typescript
public readonly timeMaintenanceWindowStart: string;
```

- *Type:* string

---

##### `vnic2Id`<sup>Required</sup> <a name="vnic2Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnic2Id"></a>

```typescript
public readonly vnic2Id: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermOracleDbNodesDbNodes;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesDbNodes">DataAzurermOracleDbNodesDbNodes</a>

---


### DataAzurermOracleDbNodesTimeoutsOutputReference <a name="DataAzurermOracleDbNodesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDbNodes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleDbNodesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbNodes.DataAzurermOracleDbNodesTimeouts">DataAzurermOracleDbNodesTimeouts</a>

---



