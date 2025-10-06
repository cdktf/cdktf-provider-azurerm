# `dataAzurermLogAnalyticsWorkspaceTable` Submodule <a name="`dataAzurermLogAnalyticsWorkspaceTable` Submodule" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogAnalyticsWorkspaceTable <a name="DataAzurermLogAnalyticsWorkspaceTable" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table azurerm_log_analytics_workspace_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

new dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable(scope: Construct, id: string, config: DataAzurermLogAnalyticsWorkspaceTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig">DataAzurermLogAnalyticsWorkspaceTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig">DataAzurermLogAnalyticsWorkspaceTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermLogAnalyticsWorkspaceTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermLogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermLogAnalyticsWorkspaceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermLogAnalyticsWorkspaceTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermLogAnalyticsWorkspaceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLogAnalyticsWorkspaceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference">DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.totalRetentionInDays">totalRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference">DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference</a>

---

##### `totalRetentionInDays`<sup>Required</sup> <a name="totalRetentionInDays" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.totalRetentionInDays"></a>

```typescript
public readonly totalRetentionInDays: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermLogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogAnalyticsWorkspaceTableConfig <a name="DataAzurermLogAnalyticsWorkspaceTableConfig" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.Initializer"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

const dataAzurermLogAnalyticsWorkspaceTableConfig: dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#name DataAzurermLogAnalyticsWorkspaceTable#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#workspace_id DataAzurermLogAnalyticsWorkspaceTable#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#id DataAzurermLogAnalyticsWorkspaceTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#timeouts DataAzurermLogAnalyticsWorkspaceTable#timeouts}

---

### DataAzurermLogAnalyticsWorkspaceTableTimeouts <a name="DataAzurermLogAnalyticsWorkspaceTableTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.Initializer"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

const dataAzurermLogAnalyticsWorkspaceTableTimeouts: dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#read DataAzurermLogAnalyticsWorkspaceTable#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/log_analytics_workspace_table#read DataAzurermLogAnalyticsWorkspaceTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference <a name="DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermLogAnalyticsWorkspaceTable } from '@cdktf/provider-azurerm'

new dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermLogAnalyticsWorkspaceTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLogAnalyticsWorkspaceTable.DataAzurermLogAnalyticsWorkspaceTableTimeouts">DataAzurermLogAnalyticsWorkspaceTableTimeouts</a>

---



