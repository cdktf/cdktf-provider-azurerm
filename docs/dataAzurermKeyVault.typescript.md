# `dataAzurermKeyVault` Submodule <a name="`dataAzurermKeyVault` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVault <a name="DataAzurermKeyVault" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault azurerm_key_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVault(scope: Construct, id: string, config: DataAzurermKeyVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig">DataAzurermKeyVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig">DataAzurermKeyVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermKeyVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isConstruct"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

dataAzurermKeyVault.DataAzurermKeyVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformElement"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

dataAzurermKeyVault.DataAzurermKeyVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformDataSource"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

dataAzurermKeyVault.DataAzurermKeyVault.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermKeyVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKeyVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKeyVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.accessPolicy">accessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList">DataAzurermKeyVaultAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForDeployment">enabledForDeployment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForDiskEncryption">enabledForDiskEncryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForTemplateDeployment">enabledForTemplateDeployment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enableRbacAuthorization">enableRbacAuthorization</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList">DataAzurermKeyVaultNetworkAclsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.purgeProtectionEnabled">purgeProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference">DataAzurermKeyVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.vaultUri">vaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: DataAzurermKeyVaultAccessPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList">DataAzurermKeyVaultAccessPolicyList</a>

---

##### `enabledForDeployment`<sup>Required</sup> <a name="enabledForDeployment" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForDeployment"></a>

```typescript
public readonly enabledForDeployment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabledForDiskEncryption`<sup>Required</sup> <a name="enabledForDiskEncryption" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForDiskEncryption"></a>

```typescript
public readonly enabledForDiskEncryption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabledForTemplateDeployment`<sup>Required</sup> <a name="enabledForTemplateDeployment" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enabledForTemplateDeployment"></a>

```typescript
public readonly enabledForTemplateDeployment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableRbacAuthorization`<sup>Required</sup> <a name="enableRbacAuthorization" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.enableRbacAuthorization"></a>

```typescript
public readonly enableRbacAuthorization: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.networkAcls"></a>

```typescript
public readonly networkAcls: DataAzurermKeyVaultNetworkAclsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList">DataAzurermKeyVaultNetworkAclsList</a>

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `purgeProtectionEnabled`<sup>Required</sup> <a name="purgeProtectionEnabled" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.purgeProtectionEnabled"></a>

```typescript
public readonly purgeProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKeyVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference">DataAzurermKeyVaultTimeoutsOutputReference</a>

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.vaultUri"></a>

```typescript
public readonly vaultUri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermKeyVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultAccessPolicy <a name="DataAzurermKeyVaultAccessPolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicy.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

const dataAzurermKeyVaultAccessPolicy: dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicy = { ... }
```


### DataAzurermKeyVaultConfig <a name="DataAzurermKeyVaultConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

const dataAzurermKeyVaultConfig: dataAzurermKeyVault.DataAzurermKeyVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#name DataAzurermKeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#resource_group_name DataAzurermKeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#id DataAzurermKeyVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#name DataAzurermKeyVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#resource_group_name DataAzurermKeyVault#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#id DataAzurermKeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKeyVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#timeouts DataAzurermKeyVault#timeouts}

---

### DataAzurermKeyVaultNetworkAcls <a name="DataAzurermKeyVaultNetworkAcls" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAcls.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

const dataAzurermKeyVaultNetworkAcls: dataAzurermKeyVault.DataAzurermKeyVaultNetworkAcls = { ... }
```


### DataAzurermKeyVaultTimeouts <a name="DataAzurermKeyVaultTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

const dataAzurermKeyVaultTimeouts: dataAzurermKeyVault.DataAzurermKeyVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#read DataAzurermKeyVault#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/key_vault#read DataAzurermKeyVault#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultAccessPolicyList <a name="DataAzurermKeyVaultAccessPolicyList" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.get"></a>

```typescript
public get(index: number): DataAzurermKeyVaultAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKeyVaultAccessPolicyOutputReference <a name="DataAzurermKeyVaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.certificatePermissions">certificatePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.keyPermissions">keyPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.secretPermissions">secretPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.storagePermissions">storagePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicy">DataAzurermKeyVaultAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `certificatePermissions`<sup>Required</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.certificatePermissions"></a>

```typescript
public readonly certificatePermissions: string[];
```

- *Type:* string[]

---

##### `keyPermissions`<sup>Required</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.keyPermissions"></a>

```typescript
public readonly keyPermissions: string[];
```

- *Type:* string[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `secretPermissions`<sup>Required</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.secretPermissions"></a>

```typescript
public readonly secretPermissions: string[];
```

- *Type:* string[]

---

##### `storagePermissions`<sup>Required</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.storagePermissions"></a>

```typescript
public readonly storagePermissions: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKeyVaultAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultAccessPolicy">DataAzurermKeyVaultAccessPolicy</a>

---


### DataAzurermKeyVaultNetworkAclsList <a name="DataAzurermKeyVaultNetworkAclsList" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.get"></a>

```typescript
public get(index: number): DataAzurermKeyVaultNetworkAclsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKeyVaultNetworkAclsOutputReference <a name="DataAzurermKeyVaultNetworkAclsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAcls">DataAzurermKeyVaultNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds"></a>

```typescript
public readonly virtualNetworkSubnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKeyVaultNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultNetworkAcls">DataAzurermKeyVaultNetworkAcls</a>

---


### DataAzurermKeyVaultTimeoutsOutputReference <a name="DataAzurermKeyVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKeyVault } from '@cdktf/provider-azurerm'

new dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermKeyVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKeyVault.DataAzurermKeyVaultTimeouts">DataAzurermKeyVaultTimeouts</a>

---



