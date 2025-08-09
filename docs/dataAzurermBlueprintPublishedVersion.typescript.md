# `dataAzurermBlueprintPublishedVersion` Submodule <a name="`dataAzurermBlueprintPublishedVersion` Submodule" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBlueprintPublishedVersion <a name="DataAzurermBlueprintPublishedVersion" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version azurerm_blueprint_published_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

new dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion(scope: Construct, id: string, config: DataAzurermBlueprintPublishedVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig">DataAzurermBlueprintPublishedVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig">DataAzurermBlueprintPublishedVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermBlueprintPublishedVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermBlueprintPublishedVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermBlueprintPublishedVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermBlueprintPublishedVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope">targetScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput">blueprintNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName">blueprintName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `targetScope`<sup>Required</sup> <a name="targetScope" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope"></a>

```typescript
public readonly targetScope: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBlueprintPublishedVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `blueprintNameInput`<sup>Optional</sup> <a name="blueprintNameInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput"></a>

```typescript
public readonly blueprintNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermBlueprintPublishedVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBlueprintPublishedVersionConfig <a name="DataAzurermBlueprintPublishedVersionConfig" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.Initializer"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

const dataAzurermBlueprintPublishedVersionConfig: dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName">blueprintName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId">scopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}.

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBlueprintPublishedVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#timeouts DataAzurermBlueprintPublishedVersion#timeouts}

---

### DataAzurermBlueprintPublishedVersionTimeouts <a name="DataAzurermBlueprintPublishedVersionTimeouts" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.Initializer"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

const dataAzurermBlueprintPublishedVersionTimeouts: dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBlueprintPublishedVersionTimeoutsOutputReference <a name="DataAzurermBlueprintPublishedVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermBlueprintPublishedVersion } from '@cdktf/provider-azurerm'

new dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermBlueprintPublishedVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---



