# `dataAzurermDatabaseMigrationProject` Submodule <a name="`dataAzurermDatabaseMigrationProject` Submodule" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDatabaseMigrationProject <a name="DataAzurermDatabaseMigrationProject" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project azurerm_database_migration_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

new dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject(scope: Construct, id: string, config: DataAzurermDatabaseMigrationProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig">DataAzurermDatabaseMigrationProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig">DataAzurermDatabaseMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDatabaseMigrationProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDatabaseMigrationProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isConstruct"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformElement"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformDataSource"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermDatabaseMigrationProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDatabaseMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDatabaseMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDatabaseMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.sourcePlatform">sourcePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.targetPlatform">targetPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference">DataAzurermDatabaseMigrationProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `sourcePlatform`<sup>Required</sup> <a name="sourcePlatform" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.sourcePlatform"></a>

```typescript
public readonly sourcePlatform: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetPlatform`<sup>Required</sup> <a name="targetPlatform" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.targetPlatform"></a>

```typescript
public readonly targetPlatform: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDatabaseMigrationProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference">DataAzurermDatabaseMigrationProjectTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDatabaseMigrationProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDatabaseMigrationProjectConfig <a name="DataAzurermDatabaseMigrationProjectConfig" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.Initializer"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

const dataAzurermDatabaseMigrationProjectConfig: dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#name DataAzurermDatabaseMigrationProject#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#resource_group_name DataAzurermDatabaseMigrationProject#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#service_name DataAzurermDatabaseMigrationProject#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#id DataAzurermDatabaseMigrationProject#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#name DataAzurermDatabaseMigrationProject#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#resource_group_name DataAzurermDatabaseMigrationProject#resource_group_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#service_name DataAzurermDatabaseMigrationProject#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#id DataAzurermDatabaseMigrationProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDatabaseMigrationProjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#timeouts DataAzurermDatabaseMigrationProject#timeouts}

---

### DataAzurermDatabaseMigrationProjectTimeouts <a name="DataAzurermDatabaseMigrationProjectTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts.Initializer"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

const dataAzurermDatabaseMigrationProjectTimeouts: dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#read DataAzurermDatabaseMigrationProject#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/database_migration_project#read DataAzurermDatabaseMigrationProject#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDatabaseMigrationProjectTimeoutsOutputReference <a name="DataAzurermDatabaseMigrationProjectTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDatabaseMigrationProject } from '@cdktf/provider-azurerm'

new dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDatabaseMigrationProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDatabaseMigrationProject.DataAzurermDatabaseMigrationProjectTimeouts">DataAzurermDatabaseMigrationProjectTimeouts</a>

---



