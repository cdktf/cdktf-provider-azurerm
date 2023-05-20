# `data_azurerm_monitor_diagnostic_categories`

Refer to the Terraform Registory for docs: [`data_azurerm_monitor_diagnostic_categories`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories).

# `dataAzurermMonitorDiagnosticCategories` Submodule <a name="`dataAzurermMonitorDiagnosticCategories` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorDiagnosticCategories <a name="DataAzurermMonitorDiagnosticCategories" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories azurerm_monitor_diagnostic_categories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories(scope: Construct, id: string, config: DataAzurermMonitorDiagnosticCategoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig">DataAzurermMonitorDiagnosticCategoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig">DataAzurermMonitorDiagnosticCategoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorDiagnosticCategoriesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isConstruct"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logCategoryGroups">logCategoryGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logCategoryTypes">logCategoryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logs">logs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference">DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `logCategoryGroups`<sup>Required</sup> <a name="logCategoryGroups" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logCategoryGroups"></a>

```typescript
public readonly logCategoryGroups: string[];
```

- *Type:* string[]

---

##### `logCategoryTypes`<sup>Required</sup> <a name="logCategoryTypes" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logCategoryTypes"></a>

```typescript
public readonly logCategoryTypes: string[];
```

- *Type:* string[]

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.logs"></a>

```typescript
public readonly logs: string[];
```

- *Type:* string[]

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference">DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermMonitorDiagnosticCategoriesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorDiagnosticCategoriesConfig <a name="DataAzurermMonitorDiagnosticCategoriesConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDiagnosticCategoriesConfig: dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#resource_id DataAzurermMonitorDiagnosticCategories#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#id DataAzurermMonitorDiagnosticCategories#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#resource_id DataAzurermMonitorDiagnosticCategories#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#id DataAzurermMonitorDiagnosticCategories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDiagnosticCategoriesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#timeouts DataAzurermMonitorDiagnosticCategories#timeouts}

---

### DataAzurermMonitorDiagnosticCategoriesTimeouts <a name="DataAzurermMonitorDiagnosticCategoriesTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDiagnosticCategoriesTimeouts: dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#read DataAzurermMonitorDiagnosticCategories#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/monitor_diagnostic_categories#read DataAzurermMonitorDiagnosticCategories#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference <a name="DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDiagnosticCategories } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDiagnosticCategoriesTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDiagnosticCategories.DataAzurermMonitorDiagnosticCategoriesTimeouts">DataAzurermMonitorDiagnosticCategoriesTimeouts</a> | cdktf.IResolvable

---



