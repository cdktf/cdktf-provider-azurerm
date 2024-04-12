# `dataAzurermDataFactoryTriggerSchedules` Submodule <a name="`dataAzurermDataFactoryTriggerSchedules` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataFactoryTriggerSchedules <a name="DataAzurermDataFactoryTriggerSchedules" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules azurerm_data_factory_trigger_schedules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

new dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules(scope: Construct, id: string, config: DataAzurermDataFactoryTriggerSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig">DataAzurermDataFactoryTriggerSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig">DataAzurermDataFactoryTriggerSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDataFactoryTriggerSchedulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataFactoryTriggerSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataFactoryTriggerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataFactoryTriggerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference">DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference">DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference</a>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDataFactoryTriggerSchedulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataFactoryTriggerSchedulesConfig <a name="DataAzurermDataFactoryTriggerSchedulesConfig" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.Initializer"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

const dataAzurermDataFactoryTriggerSchedulesConfig: dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#data_factory_id DataAzurermDataFactoryTriggerSchedules#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#id DataAzurermDataFactoryTriggerSchedules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#data_factory_id DataAzurermDataFactoryTriggerSchedules#data_factory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#id DataAzurermDataFactoryTriggerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDataFactoryTriggerSchedulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#timeouts DataAzurermDataFactoryTriggerSchedules#timeouts}

---

### DataAzurermDataFactoryTriggerSchedulesTimeouts <a name="DataAzurermDataFactoryTriggerSchedulesTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.Initializer"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

const dataAzurermDataFactoryTriggerSchedulesTimeouts: dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#read DataAzurermDataFactoryTriggerSchedules#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/data-sources/data_factory_trigger_schedules#read DataAzurermDataFactoryTriggerSchedules#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference <a name="DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDataFactoryTriggerSchedules } from '@cdktf/provider-azurerm'

new dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDataFactoryTriggerSchedulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

---



