# `dataAzurermTrafficManagerGeographicalLocation` Submodule <a name="`dataAzurermTrafficManagerGeographicalLocation` Submodule" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermTrafficManagerGeographicalLocation <a name="DataAzurermTrafficManagerGeographicalLocation" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location azurerm_traffic_manager_geographical_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

new dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation(scope: Construct, id: string, config: DataAzurermTrafficManagerGeographicalLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig">DataAzurermTrafficManagerGeographicalLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig">DataAzurermTrafficManagerGeographicalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermTrafficManagerGeographicalLocationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermTrafficManagerGeographicalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermTrafficManagerGeographicalLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermTrafficManagerGeographicalLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermTrafficManagerGeographicalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermTrafficManagerGeographicalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermTrafficManagerGeographicalLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermTrafficManagerGeographicalLocationConfig <a name="DataAzurermTrafficManagerGeographicalLocationConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.Initializer"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

const dataAzurermTrafficManagerGeographicalLocationConfig: dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermTrafficManagerGeographicalLocationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#timeouts DataAzurermTrafficManagerGeographicalLocation#timeouts}

---

### DataAzurermTrafficManagerGeographicalLocationTimeouts <a name="DataAzurermTrafficManagerGeographicalLocationTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.Initializer"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

const dataAzurermTrafficManagerGeographicalLocationTimeouts: dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference <a name="DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermTrafficManagerGeographicalLocation } from '@cdktf/provider-azurerm'

new dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermTrafficManagerGeographicalLocationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

---



