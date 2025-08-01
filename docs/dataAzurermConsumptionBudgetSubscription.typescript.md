# `dataAzurermConsumptionBudgetSubscription` Submodule <a name="`dataAzurermConsumptionBudgetSubscription` Submodule" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConsumptionBudgetSubscription <a name="DataAzurermConsumptionBudgetSubscription" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription azurerm_consumption_budget_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription(scope: Construct, id: string, config: DataAzurermConsumptionBudgetSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig">DataAzurermConsumptionBudgetSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig">DataAzurermConsumptionBudgetSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermConsumptionBudgetSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermConsumptionBudgetSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermConsumptionBudgetSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermConsumptionBudgetSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConsumptionBudgetSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList">DataAzurermConsumptionBudgetSubscriptionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList">DataAzurermConsumptionBudgetSubscriptionNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeGrain">timeGrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference">DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList">DataAzurermConsumptionBudgetSubscriptionTimePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.filter"></a>

```typescript
public readonly filter: DataAzurermConsumptionBudgetSubscriptionFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList">DataAzurermConsumptionBudgetSubscriptionFilterList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.notification"></a>

```typescript
public readonly notification: DataAzurermConsumptionBudgetSubscriptionNotificationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList">DataAzurermConsumptionBudgetSubscriptionNotificationList</a>

---

##### `timeGrain`<sup>Required</sup> <a name="timeGrain" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeGrain"></a>

```typescript
public readonly timeGrain: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference">DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timePeriod"></a>

```typescript
public readonly timePeriod: DataAzurermConsumptionBudgetSubscriptionTimePeriodList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList">DataAzurermConsumptionBudgetSubscriptionTimePeriodList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermConsumptionBudgetSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConsumptionBudgetSubscriptionConfig <a name="DataAzurermConsumptionBudgetSubscriptionConfig" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionConfig: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#name DataAzurermConsumptionBudgetSubscription#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#id DataAzurermConsumptionBudgetSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermConsumptionBudgetSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#timeouts DataAzurermConsumptionBudgetSubscription#timeouts}

---

### DataAzurermConsumptionBudgetSubscriptionFilter <a name="DataAzurermConsumptionBudgetSubscriptionFilter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilter: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionFilterDimension <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilterDimension: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionFilterNot <a name="DataAzurermConsumptionBudgetSubscriptionFilterNot" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilterNot: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimension <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilterNotDimension: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionFilterNotTag <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilterNotTag: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionFilterTag <a name="DataAzurermConsumptionBudgetSubscriptionFilterTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionFilterTag: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionNotification <a name="DataAzurermConsumptionBudgetSubscriptionNotification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionNotification: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification = { ... }
```


### DataAzurermConsumptionBudgetSubscriptionTimeouts <a name="DataAzurermConsumptionBudgetSubscriptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionTimeouts: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#read DataAzurermConsumptionBudgetSubscription#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/consumption_budget_subscription#read DataAzurermConsumptionBudgetSubscription#read}.

---

### DataAzurermConsumptionBudgetSubscriptionTimePeriod <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

const dataAzurermConsumptionBudgetSubscriptionTimePeriod: dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConsumptionBudgetSubscriptionFilterDimensionList <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension">DataAzurermConsumptionBudgetSubscriptionFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilterDimension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimension">DataAzurermConsumptionBudgetSubscriptionFilterDimension</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterList <a name="DataAzurermConsumptionBudgetSubscriptionFilterList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension">DataAzurermConsumptionBudgetSubscriptionFilterNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilterNotDimension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimension">DataAzurermConsumptionBudgetSubscriptionFilterNotDimension</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList">DataAzurermConsumptionBudgetSubscriptionFilterNotTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot">DataAzurermConsumptionBudgetSubscriptionFilterNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterNotDimensionList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAzurermConsumptionBudgetSubscriptionFilterNotTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList">DataAzurermConsumptionBudgetSubscriptionFilterNotTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilterNot;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNot">DataAzurermConsumptionBudgetSubscriptionFilterNot</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotTagList <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag">DataAzurermConsumptionBudgetSubscriptionFilterNotTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilterNotTag;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotTag">DataAzurermConsumptionBudgetSubscriptionFilterNotTag</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList">DataAzurermConsumptionBudgetSubscriptionFilterNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList">DataAzurermConsumptionBudgetSubscriptionFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter">DataAzurermConsumptionBudgetSubscriptionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAzurermConsumptionBudgetSubscriptionFilterDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterDimensionList">DataAzurermConsumptionBudgetSubscriptionFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.not"></a>

```typescript
public readonly not: DataAzurermConsumptionBudgetSubscriptionFilterNotList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterNotList">DataAzurermConsumptionBudgetSubscriptionFilterNotList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAzurermConsumptionBudgetSubscriptionFilterTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList">DataAzurermConsumptionBudgetSubscriptionFilterTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilter">DataAzurermConsumptionBudgetSubscriptionFilter</a>

---


### DataAzurermConsumptionBudgetSubscriptionFilterTagList <a name="DataAzurermConsumptionBudgetSubscriptionFilterTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag">DataAzurermConsumptionBudgetSubscriptionFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionFilterTag;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionFilterTag">DataAzurermConsumptionBudgetSubscriptionFilterTag</a>

---


### DataAzurermConsumptionBudgetSubscriptionNotificationList <a name="DataAzurermConsumptionBudgetSubscriptionNotificationList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails">contactEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups">contactGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles">contactRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification">DataAzurermConsumptionBudgetSubscriptionNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactEmails"></a>

```typescript
public readonly contactEmails: string[];
```

- *Type:* string[]

---

##### `contactGroups`<sup>Required</sup> <a name="contactGroups" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactGroups"></a>

```typescript
public readonly contactGroups: string[];
```

- *Type:* string[]

---

##### `contactRoles`<sup>Required</sup> <a name="contactRoles" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.contactRoles"></a>

```typescript
public readonly contactRoles: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionNotification;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionNotification">DataAzurermConsumptionBudgetSubscriptionNotification</a>

---


### DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermConsumptionBudgetSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimeouts">DataAzurermConsumptionBudgetSubscriptionTimeouts</a>

---


### DataAzurermConsumptionBudgetSubscriptionTimePeriodList <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriodList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get"></a>

```typescript
public get(index: number): DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference <a name="DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer"></a>

```typescript
import { dataAzurermConsumptionBudgetSubscription } from '@cdktf/provider-azurerm'

new dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod">DataAzurermConsumptionBudgetSubscriptionTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermConsumptionBudgetSubscriptionTimePeriod;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetSubscription.DataAzurermConsumptionBudgetSubscriptionTimePeriod">DataAzurermConsumptionBudgetSubscriptionTimePeriod</a>

---



