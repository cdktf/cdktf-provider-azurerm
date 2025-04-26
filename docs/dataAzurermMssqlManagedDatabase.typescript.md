# `dataAzurermMssqlManagedDatabase` Submodule <a name="`dataAzurermMssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlManagedDatabase <a name="DataAzurermMssqlManagedDatabase" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase(scope: Construct, id: string, config: DataAzurermMssqlManagedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig">DataAzurermMssqlManagedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig">DataAzurermMssqlManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMssqlManagedDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMssqlManagedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMssqlManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName">managedInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays">shortTermRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `longTermRetentionPolicy`<sup>Required</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```typescript
public readonly longTermRetentionPolicy: DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a>

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName"></a>

```typescript
public readonly managedInstanceName: string;
```

- *Type:* string

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: DataAzurermMssqlManagedDatabasePointInTimeRestoreList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shortTermRetentionDays`<sup>Required</sup> <a name="shortTermRetentionDays" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays"></a>

```typescript
public readonly shortTermRetentionDays: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMssqlManagedDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMssqlManagedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlManagedDatabaseConfig <a name="DataAzurermMssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedDatabaseConfig: dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMssqlManagedDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#timeouts DataAzurermMssqlManagedDatabase#timeouts}

---

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedDatabaseLongTermRetentionPolicy: dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy = { ... }
```


### DataAzurermMssqlManagedDatabasePointInTimeRestore <a name="DataAzurermMssqlManagedDatabasePointInTimeRestore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedDatabasePointInTimeRestore: dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore = { ... }
```


### DataAzurermMssqlManagedDatabaseTimeouts <a name="DataAzurermMssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedDatabaseTimeouts: dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get"></a>

```typescript
public get(index: number): DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">immutableBackupsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">monthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">weeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">weekOfYear</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">yearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immutableBackupsEnabled`<sup>Required</sup> <a name="immutableBackupsEnabled" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```typescript
public readonly immutableBackupsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `monthlyRetention`<sup>Required</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```typescript
public readonly monthlyRetention: string;
```

- *Type:* string

---

##### `weeklyRetention`<sup>Required</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```typescript
public readonly weeklyRetention: string;
```

- *Type:* string

---

##### `weekOfYear`<sup>Required</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```typescript
public readonly weekOfYear: number;
```

- *Type:* number

---

##### `yearlyRetention`<sup>Required</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```typescript
public readonly yearlyRetention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreList <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get"></a>

```typescript
public get(index: number): DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMssqlManagedDatabasePointInTimeRestore;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a>

---


### DataAzurermMssqlManagedDatabaseTimeoutsOutputReference <a name="DataAzurermMssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedDatabase } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMssqlManagedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

---



