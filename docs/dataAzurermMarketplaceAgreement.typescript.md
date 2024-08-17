# `dataAzurermMarketplaceAgreement` Submodule <a name="`dataAzurermMarketplaceAgreement` Submodule" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMarketplaceAgreement <a name="DataAzurermMarketplaceAgreement" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement azurerm_marketplace_agreement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

new dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement(scope: Construct, id: string, config: DataAzurermMarketplaceAgreementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig">DataAzurermMarketplaceAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig">DataAzurermMarketplaceAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMarketplaceAgreementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMarketplaceAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMarketplaceAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMarketplaceAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMarketplaceAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMarketplaceAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.licenseTextLink">licenseTextLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.privacyPolicyLink">privacyPolicyLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference">DataAzurermMarketplaceAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `licenseTextLink`<sup>Required</sup> <a name="licenseTextLink" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.licenseTextLink"></a>

```typescript
public readonly licenseTextLink: string;
```

- *Type:* string

---

##### `privacyPolicyLink`<sup>Required</sup> <a name="privacyPolicyLink" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.privacyPolicyLink"></a>

```typescript
public readonly privacyPolicyLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMarketplaceAgreementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference">DataAzurermMarketplaceAgreementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMarketplaceAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMarketplaceAgreementConfig <a name="DataAzurermMarketplaceAgreementConfig" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.Initializer"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

const dataAzurermMarketplaceAgreementConfig: dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#offer DataAzurermMarketplaceAgreement#offer}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.plan">plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#plan DataAzurermMarketplaceAgreement#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#publisher DataAzurermMarketplaceAgreement#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#id DataAzurermMarketplaceAgreement#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#offer DataAzurermMarketplaceAgreement#offer}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#plan DataAzurermMarketplaceAgreement#plan}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#publisher DataAzurermMarketplaceAgreement#publisher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#id DataAzurermMarketplaceAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMarketplaceAgreementTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#timeouts DataAzurermMarketplaceAgreement#timeouts}

---

### DataAzurermMarketplaceAgreementTimeouts <a name="DataAzurermMarketplaceAgreementTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.Initializer"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

const dataAzurermMarketplaceAgreementTimeouts: dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#read DataAzurermMarketplaceAgreement#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/marketplace_agreement#read DataAzurermMarketplaceAgreement#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMarketplaceAgreementTimeoutsOutputReference <a name="DataAzurermMarketplaceAgreementTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMarketplaceAgreement } from '@cdktf/provider-azurerm'

new dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMarketplaceAgreementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

---



