# `dataAzurermElasticSanVolumeGroup` Submodule <a name="`dataAzurermElasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermElasticSanVolumeGroup <a name="DataAzurermElasticSanVolumeGroup" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup(scope: Construct, id: string, config: DataAzurermElasticSanVolumeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig">DataAzurermElasticSanVolumeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig">DataAzurermElasticSanVolumeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermElasticSanVolumeGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermElasticSanVolumeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule">networkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput">elasticSanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId">elasticSanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryption"></a>

```typescript
public readonly encryption: DataAzurermElasticSanVolumeGroupEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList">DataAzurermElasticSanVolumeGroupEncryptionList</a>

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.identity"></a>

```typescript
public readonly identity: DataAzurermElasticSanVolumeGroupIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList">DataAzurermElasticSanVolumeGroupIdentityList</a>

---

##### `networkRule`<sup>Required</sup> <a name="networkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.networkRule"></a>

```typescript
public readonly networkRule: DataAzurermElasticSanVolumeGroupNetworkRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList">DataAzurermElasticSanVolumeGroupNetworkRuleList</a>

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermElasticSanVolumeGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference">DataAzurermElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `elasticSanIdInput`<sup>Optional</sup> <a name="elasticSanIdInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```typescript
public readonly elasticSanIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermElasticSanVolumeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.elasticSanId"></a>

```typescript
public readonly elasticSanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermElasticSanVolumeGroupConfig <a name="DataAzurermElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const dataAzurermElasticSanVolumeGroupConfig: dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId">elasticSanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```typescript
public readonly elasticSanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#elastic_san_id DataAzurermElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#name DataAzurermElasticSanVolumeGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#id DataAzurermElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermElasticSanVolumeGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#timeouts DataAzurermElasticSanVolumeGroup#timeouts}

---

### DataAzurermElasticSanVolumeGroupEncryption <a name="DataAzurermElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const dataAzurermElasticSanVolumeGroupEncryption: dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption = { ... }
```


### DataAzurermElasticSanVolumeGroupIdentity <a name="DataAzurermElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const dataAzurermElasticSanVolumeGroupIdentity: dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity = { ... }
```


### DataAzurermElasticSanVolumeGroupNetworkRule <a name="DataAzurermElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const dataAzurermElasticSanVolumeGroupNetworkRule: dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule = { ... }
```


### DataAzurermElasticSanVolumeGroupTimeouts <a name="DataAzurermElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const dataAzurermElasticSanVolumeGroupTimeouts: dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/elastic_san_volume_group#read DataAzurermElasticSanVolumeGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermElasticSanVolumeGroupEncryptionList <a name="DataAzurermElasticSanVolumeGroupEncryptionList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get"></a>

```typescript
public get(index: number): DataAzurermElasticSanVolumeGroupEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermElasticSanVolumeGroupEncryptionOutputReference <a name="DataAzurermElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">currentVersionedKeyExpirationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">currentVersionedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">lastKeyRotationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersionedKeyExpirationTimestamp`<sup>Required</sup> <a name="currentVersionedKeyExpirationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```typescript
public readonly currentVersionedKeyExpirationTimestamp: string;
```

- *Type:* string

---

##### `currentVersionedKeyId`<sup>Required</sup> <a name="currentVersionedKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```typescript
public readonly currentVersionedKeyId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `lastKeyRotationTimestamp`<sup>Required</sup> <a name="lastKeyRotationTimestamp" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```typescript
public readonly lastKeyRotationTimestamp: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermElasticSanVolumeGroupEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupEncryption">DataAzurermElasticSanVolumeGroupEncryption</a>

---


### DataAzurermElasticSanVolumeGroupIdentityList <a name="DataAzurermElasticSanVolumeGroupIdentityList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermElasticSanVolumeGroupIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermElasticSanVolumeGroupIdentityOutputReference <a name="DataAzurermElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermElasticSanVolumeGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupIdentity">DataAzurermElasticSanVolumeGroupIdentity</a>

---


### DataAzurermElasticSanVolumeGroupNetworkRuleList <a name="DataAzurermElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get"></a>

```typescript
public get(index: number): DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference <a name="DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermElasticSanVolumeGroupNetworkRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupNetworkRule">DataAzurermElasticSanVolumeGroupNetworkRule</a>

---


### DataAzurermElasticSanVolumeGroupTimeoutsOutputReference <a name="DataAzurermElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermElasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermElasticSanVolumeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermElasticSanVolumeGroup.DataAzurermElasticSanVolumeGroupTimeouts">DataAzurermElasticSanVolumeGroupTimeouts</a>

---



