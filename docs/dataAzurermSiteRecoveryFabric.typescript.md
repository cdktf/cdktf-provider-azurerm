# `dataAzurermSiteRecoveryFabric` Submodule <a name="`dataAzurermSiteRecoveryFabric` Submodule" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSiteRecoveryFabric <a name="DataAzurermSiteRecoveryFabric" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric azurerm_site_recovery_fabric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

new dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric(scope: Construct, id: string, config: DataAzurermSiteRecoveryFabricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig">DataAzurermSiteRecoveryFabricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig">DataAzurermSiteRecoveryFabricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermSiteRecoveryFabricTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSiteRecoveryFabric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isConstruct"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformElement"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformDataSource"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermSiteRecoveryFabric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSiteRecoveryFabric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSiteRecoveryFabric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSiteRecoveryFabric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference">DataAzurermSiteRecoveryFabricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSiteRecoveryFabricTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference">DataAzurermSiteRecoveryFabricTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermSiteRecoveryFabricTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSiteRecoveryFabricConfig <a name="DataAzurermSiteRecoveryFabricConfig" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.Initializer"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

const dataAzurermSiteRecoveryFabricConfig: dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#name DataAzurermSiteRecoveryFabric#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#recovery_vault_name DataAzurermSiteRecoveryFabric#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#resource_group_name DataAzurermSiteRecoveryFabric#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#id DataAzurermSiteRecoveryFabric#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#name DataAzurermSiteRecoveryFabric#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#recovery_vault_name DataAzurermSiteRecoveryFabric#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#resource_group_name DataAzurermSiteRecoveryFabric#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#id DataAzurermSiteRecoveryFabric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSiteRecoveryFabricTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#timeouts DataAzurermSiteRecoveryFabric#timeouts}

---

### DataAzurermSiteRecoveryFabricTimeouts <a name="DataAzurermSiteRecoveryFabricTimeouts" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts.Initializer"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

const dataAzurermSiteRecoveryFabricTimeouts: dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#read DataAzurermSiteRecoveryFabric#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/site_recovery_fabric#read DataAzurermSiteRecoveryFabric#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSiteRecoveryFabricTimeoutsOutputReference <a name="DataAzurermSiteRecoveryFabricTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermSiteRecoveryFabric } from '@cdktf/provider-azurerm'

new dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermSiteRecoveryFabricTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSiteRecoveryFabric.DataAzurermSiteRecoveryFabricTimeouts">DataAzurermSiteRecoveryFabricTimeouts</a>

---



