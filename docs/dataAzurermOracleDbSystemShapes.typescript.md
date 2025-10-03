# `dataAzurermOracleDbSystemShapes` Submodule <a name="`dataAzurermOracleDbSystemShapes` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDbSystemShapes <a name="DataAzurermOracleDbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes azurerm_oracle_db_system_shapes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes(scope: Construct, id: string, config: DataAzurermOracleDbSystemShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig">DataAzurermOracleDbSystemShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig">DataAzurermOracleDbSystemShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleDbSystemShapesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermOracleDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleDbSystemShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dbSystemShapes">dbSystemShapes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList">DataAzurermOracleDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference">DataAzurermOracleDbSystemShapesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbSystemShapes`<sup>Required</sup> <a name="dbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dbSystemShapes"></a>

```typescript
public readonly dbSystemShapes: DataAzurermOracleDbSystemShapesDbSystemShapesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList">DataAzurermOracleDbSystemShapesDbSystemShapesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDbSystemShapesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference">DataAzurermOracleDbSystemShapesTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleDbSystemShapesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDbSystemShapesConfig <a name="DataAzurermOracleDbSystemShapesConfig" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbSystemShapesConfig: dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#location DataAzurermOracleDbSystemShapes#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#id DataAzurermOracleDbSystemShapes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.zone">zone</a></code> | <code>string</code> | Filter the versions by zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#location DataAzurermOracleDbSystemShapes#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#id DataAzurermOracleDbSystemShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDbSystemShapesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#timeouts DataAzurermOracleDbSystemShapes#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Filter the versions by zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#zone DataAzurermOracleDbSystemShapes#zone}

---

### DataAzurermOracleDbSystemShapesDbSystemShapes <a name="DataAzurermOracleDbSystemShapesDbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbSystemShapesDbSystemShapes: dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes = { ... }
```


### DataAzurermOracleDbSystemShapesTimeouts <a name="DataAzurermOracleDbSystemShapesTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

const dataAzurermOracleDbSystemShapesTimeouts: dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#read DataAzurermOracleDbSystemShapes#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/oracle_db_system_shapes#read DataAzurermOracleDbSystemShapes#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDbSystemShapesDbSystemShapesList <a name="DataAzurermOracleDbSystemShapesDbSystemShapesList" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get"></a>

```typescript
public get(index: number): DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference <a name="DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.areServerTypesSupported">areServerTypesSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">availableCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">availableCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">availableDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">availableDataStoragePerServerInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">availableDbNodePerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">availableDbNodeStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">availableMemoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">availableMemoryPerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">coreCountIncrement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">maximumNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumStorageCount">maximumStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">minimumCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCountPerNode">minimumCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDataStorageInTbs">minimumDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDbNodeStoragePerNodeInGbs">minimumDbNodeStoragePerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumMemoryPerNodeInGbs">minimumMemoryPerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">minimumNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumStorageCount">minimumStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount">runtimeMinimumCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes">DataAzurermOracleDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areServerTypesSupported`<sup>Required</sup> <a name="areServerTypesSupported" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.areServerTypesSupported"></a>

```typescript
public readonly areServerTypesSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availableCoreCount`<sup>Required</sup> <a name="availableCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```typescript
public readonly availableCoreCount: number;
```

- *Type:* number

---

##### `availableCoreCountPerNode`<sup>Required</sup> <a name="availableCoreCountPerNode" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```typescript
public readonly availableCoreCountPerNode: number;
```

- *Type:* number

---

##### `availableDataStorageInTbs`<sup>Required</sup> <a name="availableDataStorageInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```typescript
public readonly availableDataStorageInTbs: number;
```

- *Type:* number

---

##### `availableDataStoragePerServerInTbs`<sup>Required</sup> <a name="availableDataStoragePerServerInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```typescript
public readonly availableDataStoragePerServerInTbs: number;
```

- *Type:* number

---

##### `availableDbNodePerNodeInGbs`<sup>Required</sup> <a name="availableDbNodePerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```typescript
public readonly availableDbNodePerNodeInGbs: number;
```

- *Type:* number

---

##### `availableDbNodeStorageInGbs`<sup>Required</sup> <a name="availableDbNodeStorageInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```typescript
public readonly availableDbNodeStorageInGbs: number;
```

- *Type:* number

---

##### `availableMemoryInGbs`<sup>Required</sup> <a name="availableMemoryInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```typescript
public readonly availableMemoryInGbs: number;
```

- *Type:* number

---

##### `availableMemoryPerNodeInGbs`<sup>Required</sup> <a name="availableMemoryPerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```typescript
public readonly availableMemoryPerNodeInGbs: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `coreCountIncrement`<sup>Required</sup> <a name="coreCountIncrement" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```typescript
public readonly coreCountIncrement: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `maximumNodeCount`<sup>Required</sup> <a name="maximumNodeCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```typescript
public readonly maximumNodeCount: number;
```

- *Type:* number

---

##### `maximumStorageCount`<sup>Required</sup> <a name="maximumStorageCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumStorageCount"></a>

```typescript
public readonly maximumStorageCount: number;
```

- *Type:* number

---

##### `minimumCoreCount`<sup>Required</sup> <a name="minimumCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```typescript
public readonly minimumCoreCount: number;
```

- *Type:* number

---

##### `minimumCoreCountPerNode`<sup>Required</sup> <a name="minimumCoreCountPerNode" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCountPerNode"></a>

```typescript
public readonly minimumCoreCountPerNode: number;
```

- *Type:* number

---

##### `minimumDataStorageInTbs`<sup>Required</sup> <a name="minimumDataStorageInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDataStorageInTbs"></a>

```typescript
public readonly minimumDataStorageInTbs: number;
```

- *Type:* number

---

##### `minimumDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="minimumDbNodeStoragePerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDbNodeStoragePerNodeInGbs"></a>

```typescript
public readonly minimumDbNodeStoragePerNodeInGbs: number;
```

- *Type:* number

---

##### `minimumMemoryPerNodeInGbs`<sup>Required</sup> <a name="minimumMemoryPerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumMemoryPerNodeInGbs"></a>

```typescript
public readonly minimumMemoryPerNodeInGbs: number;
```

- *Type:* number

---

##### `minimumNodeCount`<sup>Required</sup> <a name="minimumNodeCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```typescript
public readonly minimumNodeCount: number;
```

- *Type:* number

---

##### `minimumStorageCount`<sup>Required</sup> <a name="minimumStorageCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumStorageCount"></a>

```typescript
public readonly minimumStorageCount: number;
```

- *Type:* number

---

##### `runtimeMinimumCoreCount`<sup>Required</sup> <a name="runtimeMinimumCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount"></a>

```typescript
public readonly runtimeMinimumCoreCount: number;
```

- *Type:* number

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermOracleDbSystemShapesDbSystemShapes;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes">DataAzurermOracleDbSystemShapesDbSystemShapes</a>

---


### DataAzurermOracleDbSystemShapesTimeoutsOutputReference <a name="DataAzurermOracleDbSystemShapesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDbSystemShapes } from '@cdktf/provider-azurerm'

new dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleDbSystemShapesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

---



