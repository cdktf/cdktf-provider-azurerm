# `dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule <a name="`dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items azurerm_system_center_virtual_machine_manager_inventory_items}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

new dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems(scope: Construct, id: string, config: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSystemCenterVirtualMachineManagerInventoryItems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems">inventoryItems</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput">inventoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput">systemCenterVirtualMachineManagerServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType">inventoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `inventoryItems`<sup>Required</sup> <a name="inventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems"></a>

```typescript
public readonly inventoryItems: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inventoryTypeInput`<sup>Optional</sup> <a name="inventoryTypeInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput"></a>

```typescript
public readonly inventoryTypeInput: string;
```

- *Type:* string

---

##### `systemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="systemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryType`<sup>Required</sup> <a name="inventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType"></a>

```typescript
public readonly inventoryType: string;
```

- *Type:* string

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

const dataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig: dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType">inventoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId">systemCenterVirtualMachineManagerServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inventoryType`<sup>Required</sup> <a name="inventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType"></a>

```typescript
public readonly inventoryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `systemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="systemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```typescript
public readonly systemCenterVirtualMachineManagerServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

const dataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems: dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems = { ... }
```


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

const dataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts: dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

new dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get"></a>

```typescript
public get(index: number): DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

new dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a>

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermSystemCenterVirtualMachineManagerInventoryItems } from '@cdktf/provider-azurerm'

new dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---



