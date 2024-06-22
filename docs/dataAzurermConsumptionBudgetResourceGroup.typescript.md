# `dataAzurermConsumptionBudgetResourceGroup` Submodule <a name="`dataAzurermConsumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConsumptionBudgetResourceGroup <a name="DataAzurermConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup(scope: Construct, id: string, config: DataAzurermConsumptionBudgetResourceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig">DataAzurermConsumptionBudgetResourceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig">DataAzurermConsumptionBudgetResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermConsumptionBudgetResourceGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermConsumptionBudgetResourceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermConsumptionBudgetResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConsumptionBudgetResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain">timeGrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter"></a>

```typescript
public readonly filter: DataAzurermConsumptionBudgetResourceGroupFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification"></a>

```typescript
public readonly notification: DataAzurermConsumptionBudgetResourceGroupNotificationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a>

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod"></a>

```typescript
public readonly timePeriod: DataAzurermConsumptionBudgetResourceGroupTimePeriodList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConsumptionBudgetResourceGroupConfig <a name="DataAzurermConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupConfig: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}

---

### DataAzurermConsumptionBudgetResourceGroupFilter <a name="DataAzurermConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilter: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupFilterDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilterDimension: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupFilterNot <a name="DataAzurermConsumptionBudgetResourceGroupFilterNot" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilterNot: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilterNotDimension: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilterNotTag: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupFilterTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupFilterTag: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupNotification <a name="DataAzurermConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupNotification: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification = { ... }
```


### DataAzurermConsumptionBudgetResourceGroupTimeouts <a name="DataAzurermConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupTimeouts: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}.

---

### DataAzurermConsumptionBudgetResourceGroupTimePeriod <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetResourceGroupTimePeriod: dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConsumptionBudgetResourceGroupFilterDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilterDimension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterList <a name="DataAzurermConsumptionBudgetResourceGroupFilterList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilterNotDimension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAzurermConsumptionBudgetResourceGroupFilterNotTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilterNot;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilterNotTag;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAzurermConsumptionBudgetResourceGroupFilterDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not"></a>

```typescript
public readonly not: DataAzurermConsumptionBudgetResourceGroupFilterNotList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAzurermConsumptionBudgetResourceGroupFilterTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupFilterTag;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupNotificationList <a name="DataAzurermConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">contactGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">contactRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

---

##### `contactGroups`<sup>Required</sup> <a name="contactGroups" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```typescript
public readonly contactGroups: string[];
```

- *Type:* string[]

---

##### `contactRoles`<sup>Required</sup> <a name="contactRoles" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```typescript
public readonly contactRoles: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupNotification;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a>

---


### DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermConsumptionBudgetResourceGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodList <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetResourceGroup } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetResourceGroupTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a>

---



