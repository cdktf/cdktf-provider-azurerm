# `dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule <a name="`dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts azurerm_cosmosdb_restorable_database_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts(scope: Construct, id: string, config: DataAzurermCosmosdbRestorableDatabaseAccountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig">DataAzurermCosmosdbRestorableDatabaseAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig">DataAzurermCosmosdbRestorableDatabaseAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermCosmosdbRestorableDatabaseAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermCosmosdbRestorableDatabaseAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCosmosdbRestorableDatabaseAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCosmosdbRestorableDatabaseAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbRestorableDatabaseAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts"></a>

```typescript
public readonly accounts: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

const dataAzurermCosmosdbRestorableDatabaseAccountsAccounts: dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts = { ... }
```


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

const dataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations: dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations = { ... }
```


### DataAzurermCosmosdbRestorableDatabaseAccountsConfig <a name="DataAzurermCosmosdbRestorableDatabaseAccountsConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

const dataAzurermCosmosdbRestorableDatabaseAccountsConfig: dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#timeouts DataAzurermCosmosdbRestorableDatabaseAccounts#timeouts}

---

### DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

const dataAzurermCosmosdbRestorableDatabaseAccountsTimeouts: dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get"></a>

```typescript
public get(index: number): DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations">restorableLocations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restorableLocations`<sup>Required</sup> <a name="restorableLocations" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations"></a>

```typescript
public readonly restorableLocations: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCosmosdbRestorableDatabaseAccountsAccounts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get"></a>

```typescript
public get(index: number): DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId">regionalDatabaseAccountInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `regionalDatabaseAccountInstanceId`<sup>Required</sup> <a name="regionalDatabaseAccountInstanceId" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId"></a>

```typescript
public readonly regionalDatabaseAccountInstanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCosmosdbRestorableDatabaseAccounts } from '@cdktf/provider-azurerm'

new dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---



