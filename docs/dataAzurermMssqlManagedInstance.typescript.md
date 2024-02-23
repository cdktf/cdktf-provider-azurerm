# `dataAzurermMssqlManagedInstance` Submodule <a name="`dataAzurermMssqlManagedInstance` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlManagedInstance <a name="DataAzurermMssqlManagedInstance" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance azurerm_mssql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance(scope: Construct, id: string, config: DataAzurermMssqlManagedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig">DataAzurermMssqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig">DataAzurermMssqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMssqlManagedInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMssqlManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isConstruct"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformElement"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformDataSource"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMssqlManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMssqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMssqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.customerManagedKeyId">customerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dnsZone">dnsZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList">DataAzurermMssqlManagedInstanceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.proxyOverride">proxyOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference">DataAzurermMssqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.vcores">vcores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `customerManagedKeyId`<sup>Required</sup> <a name="customerManagedKeyId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.customerManagedKeyId"></a>

```typescript
public readonly customerManagedKeyId: string;
```

- *Type:* string

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dnsZone"></a>

```typescript
public readonly dnsZone: string;
```

- *Type:* string

---

##### `dnsZonePartnerId`<sup>Required</sup> <a name="dnsZonePartnerId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.dnsZonePartnerId"></a>

```typescript
public readonly dnsZonePartnerId: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.identity"></a>

```typescript
public readonly identity: DataAzurermMssqlManagedInstanceIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList">DataAzurermMssqlManagedInstanceIdentityList</a>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `proxyOverride`<sup>Required</sup> <a name="proxyOverride" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.proxyOverride"></a>

```typescript
public readonly proxyOverride: string;
```

- *Type:* string

---

##### `publicDataEndpointEnabled`<sup>Required</sup> <a name="publicDataEndpointEnabled" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.publicDataEndpointEnabled"></a>

```typescript
public readonly publicDataEndpointEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMssqlManagedInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference">DataAzurermMssqlManagedInstanceTimeoutsOutputReference</a>

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMssqlManagedInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlManagedInstanceConfig <a name="DataAzurermMssqlManagedInstanceConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedInstanceConfig: dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#name DataAzurermMssqlManagedInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#resource_group_name DataAzurermMssqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#id DataAzurermMssqlManagedInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#name DataAzurermMssqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#resource_group_name DataAzurermMssqlManagedInstance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#id DataAzurermMssqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMssqlManagedInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#timeouts DataAzurermMssqlManagedInstance#timeouts}

---

### DataAzurermMssqlManagedInstanceIdentity <a name="DataAzurermMssqlManagedInstanceIdentity" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentity.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedInstanceIdentity: dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentity = { ... }
```


### DataAzurermMssqlManagedInstanceTimeouts <a name="DataAzurermMssqlManagedInstanceTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

const dataAzurermMssqlManagedInstanceTimeouts: dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#read DataAzurermMssqlManagedInstance#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/mssql_managed_instance#read DataAzurermMssqlManagedInstance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlManagedInstanceIdentityList <a name="DataAzurermMssqlManagedInstanceIdentityList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermMssqlManagedInstanceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMssqlManagedInstanceIdentityOutputReference <a name="DataAzurermMssqlManagedInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentity">DataAzurermMssqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMssqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceIdentity">DataAzurermMssqlManagedInstanceIdentity</a>

---


### DataAzurermMssqlManagedInstanceTimeoutsOutputReference <a name="DataAzurermMssqlManagedInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMssqlManagedInstance } from '@cdktf/provider-azurerm'

new dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMssqlManagedInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedInstance.DataAzurermMssqlManagedInstanceTimeouts">DataAzurermMssqlManagedInstanceTimeouts</a>

---



