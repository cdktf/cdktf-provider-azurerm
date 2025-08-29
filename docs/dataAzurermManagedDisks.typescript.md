# `dataAzurermManagedDisks` Submodule <a name="`dataAzurermManagedDisks` Submodule" id="@cdktf/provider-azurerm.dataAzurermManagedDisks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedDisks <a name="DataAzurermManagedDisks" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks azurerm_managed_disks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisks(scope: Construct, id: string, config: DataAzurermManagedDisksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig">DataAzurermManagedDisksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig">DataAzurermManagedDisksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermManagedDisksTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermManagedDisks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isConstruct"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

dataAzurermManagedDisks.DataAzurermManagedDisks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformElement"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformDataSource"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermManagedDisks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermManagedDisks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermManagedDisks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermManagedDisks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList">DataAzurermManagedDisksDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference">DataAzurermManagedDisksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.disk"></a>

```typescript
public readonly disk: DataAzurermManagedDisksDiskList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList">DataAzurermManagedDisksDiskList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagedDisksTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference">DataAzurermManagedDisksTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermManagedDisksTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedDisksConfig <a name="DataAzurermManagedDisksConfig" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksConfig: dataAzurermManagedDisks.DataAzurermManagedDisksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#resource_group_name DataAzurermManagedDisks#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#id DataAzurermManagedDisks#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#resource_group_name DataAzurermManagedDisks#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#id DataAzurermManagedDisks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagedDisksTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#timeouts DataAzurermManagedDisks#timeouts}

---

### DataAzurermManagedDisksDisk <a name="DataAzurermManagedDisksDisk" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDisk.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksDisk: dataAzurermManagedDisks.DataAzurermManagedDisksDisk = { ... }
```


### DataAzurermManagedDisksDiskEncryptionSettings <a name="DataAzurermManagedDisksDiskEncryptionSettings" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettings.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksDiskEncryptionSettings: dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettings = { ... }
```


### DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey <a name="DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey: dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey = { ... }
```


### DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey <a name="DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey: dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey = { ... }
```


### DataAzurermManagedDisksTimeouts <a name="DataAzurermManagedDisksTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

const dataAzurermManagedDisksTimeouts: dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#read DataAzurermManagedDisks#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/managed_disks#read DataAzurermManagedDisks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList <a name="DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.get"></a>

```typescript
public get(index: number): DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference <a name="DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl">secretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey">DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretUrl`<sup>Required</sup> <a name="secretUrl" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```typescript
public readonly secretUrl: string;
```

- *Type:* string

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey">DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKey</a>

---


### DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList <a name="DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.get"></a>

```typescript
public get(index: number): DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference <a name="DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl">keyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey">DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```typescript
public readonly keyUrl: string;
```

- *Type:* string

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey">DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKey</a>

---


### DataAzurermManagedDisksDiskEncryptionSettingsList <a name="DataAzurermManagedDisksDiskEncryptionSettingsList" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermManagedDisksDiskEncryptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermManagedDisksDiskEncryptionSettingsOutputReference <a name="DataAzurermManagedDisksDiskEncryptionSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList">DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.keyEncryptionKey">keyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList">DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettings">DataAzurermManagedDisksDiskEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.diskEncryptionKey"></a>

```typescript
public readonly diskEncryptionKey: DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList">DataAzurermManagedDisksDiskEncryptionSettingsDiskEncryptionKeyList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyEncryptionKey`<sup>Required</sup> <a name="keyEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.keyEncryptionKey"></a>

```typescript
public readonly keyEncryptionKey: DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList">DataAzurermManagedDisksDiskEncryptionSettingsKeyEncryptionKeyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermManagedDisksDiskEncryptionSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettings">DataAzurermManagedDisksDiskEncryptionSettings</a>

---


### DataAzurermManagedDisksDiskList <a name="DataAzurermManagedDisksDiskList" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.get"></a>

```typescript
public get(index: number): DataAzurermManagedDisksDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermManagedDisksDiskOutputReference <a name="DataAzurermManagedDisksDiskOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.createOption">createOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskAccessId">diskAccessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskIopsReadWrite">diskIopsReadWrite</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskMbpsReadWrite">diskMbpsReadWrite</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskSizeInGb">diskSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList">DataAzurermManagedDisksDiskEncryptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.imageReferenceId">imageReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.networkAccessPolicy">networkAccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.sourceUri">sourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDisk">DataAzurermManagedDisksDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.createOption"></a>

```typescript
public readonly createOption: string;
```

- *Type:* string

---

##### `diskAccessId`<sup>Required</sup> <a name="diskAccessId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskAccessId"></a>

```typescript
public readonly diskAccessId: string;
```

- *Type:* string

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `diskIopsReadWrite`<sup>Required</sup> <a name="diskIopsReadWrite" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskIopsReadWrite"></a>

```typescript
public readonly diskIopsReadWrite: number;
```

- *Type:* number

---

##### `diskMbpsReadWrite`<sup>Required</sup> <a name="diskMbpsReadWrite" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskMbpsReadWrite"></a>

```typescript
public readonly diskMbpsReadWrite: number;
```

- *Type:* number

---

##### `diskSizeInGb`<sup>Required</sup> <a name="diskSizeInGb" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.diskSizeInGb"></a>

```typescript
public readonly diskSizeInGb: number;
```

- *Type:* number

---

##### `encryptionSettings`<sup>Required</sup> <a name="encryptionSettings" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.encryptionSettings"></a>

```typescript
public readonly encryptionSettings: DataAzurermManagedDisksDiskEncryptionSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskEncryptionSettingsList">DataAzurermManagedDisksDiskEncryptionSettingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageReferenceId`<sup>Required</sup> <a name="imageReferenceId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.imageReferenceId"></a>

```typescript
public readonly imageReferenceId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkAccessPolicy`<sup>Required</sup> <a name="networkAccessPolicy" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.networkAccessPolicy"></a>

```typescript
public readonly networkAccessPolicy: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.sourceUri"></a>

```typescript
public readonly sourceUri: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermManagedDisksDisk;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksDisk">DataAzurermManagedDisksDisk</a>

---


### DataAzurermManagedDisksTimeoutsOutputReference <a name="DataAzurermManagedDisksTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedDisks } from '@cdktf/provider-azurerm'

new dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermManagedDisksTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisks.DataAzurermManagedDisksTimeouts">DataAzurermManagedDisksTimeouts</a>

---



