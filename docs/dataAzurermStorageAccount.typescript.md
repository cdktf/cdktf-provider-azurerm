# `dataAzurermStorageAccount` Submodule <a name="`dataAzurermStorageAccount` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccount <a name="DataAzurermStorageAccount" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccount(scope: Construct, id: string, config: DataAzurermStorageAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig">DataAzurermStorageAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig">DataAzurermStorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStorageAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermStorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accessTier">accessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountKind">accountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountReplicationType">accountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountTier">accountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList">DataAzurermStorageAccountAzureFilesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList">DataAzurermStorageAccountCustomDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList">DataAzurermStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.isHnsEnabled">isHnsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobConnectionString">primaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobEndpoint">primaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobHost">primaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetEndpoint">primaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetHost">primaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftEndpoint">primaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftHost">primaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsEndpoint">primaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsHost">primaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetEndpoint">primaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetHost">primaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftEndpoint">primaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftHost">primaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileEndpoint">primaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileHost">primaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetEndpoint">primaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetHost">primaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftEndpoint">primaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftHost">primaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueEndpoint">primaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueHost">primaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftEndpoint">primaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftHost">primaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableEndpoint">primaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableHost">primaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftEndpoint">primaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftHost">primaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebEndpoint">primaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebHost">primaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetEndpoint">primaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetHost">primaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftEndpoint">primaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftHost">primaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobConnectionString">secondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobEndpoint">secondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobHost">secondaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetEndpoint">secondaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetHost">secondaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftEndpoint">secondaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftHost">secondaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsEndpoint">secondaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsHost">secondaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetEndpoint">secondaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetHost">secondaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftEndpoint">secondaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftHost">secondaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileEndpoint">secondaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileHost">secondaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetEndpoint">secondaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetHost">secondaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftEndpoint">secondaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftHost">secondaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueEndpoint">secondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueHost">secondaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftEndpoint">secondaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftHost">secondaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableEndpoint">secondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableHost">secondaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftEndpoint">secondaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftHost">secondaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebEndpoint">secondaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebHost">secondaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetEndpoint">secondaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetHost">secondaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftEndpoint">secondaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftHost">secondaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference">DataAzurermStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

---

##### `accountKind`<sup>Required</sup> <a name="accountKind" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountKind"></a>

```typescript
public readonly accountKind: string;
```

- *Type:* string

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountReplicationType"></a>

```typescript
public readonly accountReplicationType: string;
```

- *Type:* string

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountTier"></a>

```typescript
public readonly accountTier: string;
```

- *Type:* string

---

##### `allowNestedItemsToBePublic`<sup>Required</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.allowNestedItemsToBePublic"></a>

```typescript
public readonly allowNestedItemsToBePublic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `azureFilesAuthentication`<sup>Required</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.azureFilesAuthentication"></a>

```typescript
public readonly azureFilesAuthentication: DataAzurermStorageAccountAzureFilesAuthenticationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList">DataAzurermStorageAccountAzureFilesAuthenticationList</a>

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.customDomain"></a>

```typescript
public readonly customDomain: DataAzurermStorageAccountCustomDomainList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList">DataAzurermStorageAccountCustomDomainList</a>

---

##### `enableHttpsTrafficOnly`<sup>Required</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.enableHttpsTrafficOnly"></a>

```typescript
public readonly enableHttpsTrafficOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.identity"></a>

```typescript
public readonly identity: DataAzurermStorageAccountIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList">DataAzurermStorageAccountIdentityList</a>

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHnsEnabled`<sup>Required</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.isHnsEnabled"></a>

```typescript
public readonly isHnsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `nfsv3Enabled`<sup>Required</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nfsv3Enabled"></a>

```typescript
public readonly nfsv3Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryBlobConnectionString`<sup>Required</sup> <a name="primaryBlobConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobConnectionString"></a>

```typescript
public readonly primaryBlobConnectionString: string;
```

- *Type:* string

---

##### `primaryBlobEndpoint`<sup>Required</sup> <a name="primaryBlobEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobEndpoint"></a>

```typescript
public readonly primaryBlobEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobHost`<sup>Required</sup> <a name="primaryBlobHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobHost"></a>

```typescript
public readonly primaryBlobHost: string;
```

- *Type:* string

---

##### `primaryBlobInternetEndpoint`<sup>Required</sup> <a name="primaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetEndpoint"></a>

```typescript
public readonly primaryBlobInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobInternetHost`<sup>Required</sup> <a name="primaryBlobInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetHost"></a>

```typescript
public readonly primaryBlobInternetHost: string;
```

- *Type:* string

---

##### `primaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="primaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftEndpoint"></a>

```typescript
public readonly primaryBlobMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobMicrosoftHost`<sup>Required</sup> <a name="primaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftHost"></a>

```typescript
public readonly primaryBlobMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryDfsEndpoint`<sup>Required</sup> <a name="primaryDfsEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsEndpoint"></a>

```typescript
public readonly primaryDfsEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsHost`<sup>Required</sup> <a name="primaryDfsHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsHost"></a>

```typescript
public readonly primaryDfsHost: string;
```

- *Type:* string

---

##### `primaryDfsInternetEndpoint`<sup>Required</sup> <a name="primaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetEndpoint"></a>

```typescript
public readonly primaryDfsInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsInternetHost`<sup>Required</sup> <a name="primaryDfsInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetHost"></a>

```typescript
public readonly primaryDfsInternetHost: string;
```

- *Type:* string

---

##### `primaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="primaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftEndpoint"></a>

```typescript
public readonly primaryDfsMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsMicrosoftHost`<sup>Required</sup> <a name="primaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftHost"></a>

```typescript
public readonly primaryDfsMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryFileEndpoint`<sup>Required</sup> <a name="primaryFileEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileEndpoint"></a>

```typescript
public readonly primaryFileEndpoint: string;
```

- *Type:* string

---

##### `primaryFileHost`<sup>Required</sup> <a name="primaryFileHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileHost"></a>

```typescript
public readonly primaryFileHost: string;
```

- *Type:* string

---

##### `primaryFileInternetEndpoint`<sup>Required</sup> <a name="primaryFileInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetEndpoint"></a>

```typescript
public readonly primaryFileInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryFileInternetHost`<sup>Required</sup> <a name="primaryFileInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetHost"></a>

```typescript
public readonly primaryFileInternetHost: string;
```

- *Type:* string

---

##### `primaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="primaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftEndpoint"></a>

```typescript
public readonly primaryFileMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryFileMicrosoftHost`<sup>Required</sup> <a name="primaryFileMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftHost"></a>

```typescript
public readonly primaryFileMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

---

##### `primaryQueueEndpoint`<sup>Required</sup> <a name="primaryQueueEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueEndpoint"></a>

```typescript
public readonly primaryQueueEndpoint: string;
```

- *Type:* string

---

##### `primaryQueueHost`<sup>Required</sup> <a name="primaryQueueHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueHost"></a>

```typescript
public readonly primaryQueueHost: string;
```

- *Type:* string

---

##### `primaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="primaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftEndpoint"></a>

```typescript
public readonly primaryQueueMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryQueueMicrosoftHost`<sup>Required</sup> <a name="primaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftHost"></a>

```typescript
public readonly primaryQueueMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryTableEndpoint`<sup>Required</sup> <a name="primaryTableEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableEndpoint"></a>

```typescript
public readonly primaryTableEndpoint: string;
```

- *Type:* string

---

##### `primaryTableHost`<sup>Required</sup> <a name="primaryTableHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableHost"></a>

```typescript
public readonly primaryTableHost: string;
```

- *Type:* string

---

##### `primaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="primaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftEndpoint"></a>

```typescript
public readonly primaryTableMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryTableMicrosoftHost`<sup>Required</sup> <a name="primaryTableMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftHost"></a>

```typescript
public readonly primaryTableMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryWebEndpoint`<sup>Required</sup> <a name="primaryWebEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebEndpoint"></a>

```typescript
public readonly primaryWebEndpoint: string;
```

- *Type:* string

---

##### `primaryWebHost`<sup>Required</sup> <a name="primaryWebHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebHost"></a>

```typescript
public readonly primaryWebHost: string;
```

- *Type:* string

---

##### `primaryWebInternetEndpoint`<sup>Required</sup> <a name="primaryWebInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetEndpoint"></a>

```typescript
public readonly primaryWebInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryWebInternetHost`<sup>Required</sup> <a name="primaryWebInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetHost"></a>

```typescript
public readonly primaryWebInternetHost: string;
```

- *Type:* string

---

##### `primaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="primaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftEndpoint"></a>

```typescript
public readonly primaryWebMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryWebMicrosoftHost`<sup>Required</sup> <a name="primaryWebMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftHost"></a>

```typescript
public readonly primaryWebMicrosoftHost: string;
```

- *Type:* string

---

##### `queueEncryptionKeyType`<sup>Required</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.queueEncryptionKeyType"></a>

```typescript
public readonly queueEncryptionKeyType: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryBlobConnectionString`<sup>Required</sup> <a name="secondaryBlobConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobConnectionString"></a>

```typescript
public readonly secondaryBlobConnectionString: string;
```

- *Type:* string

---

##### `secondaryBlobEndpoint`<sup>Required</sup> <a name="secondaryBlobEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobEndpoint"></a>

```typescript
public readonly secondaryBlobEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobHost`<sup>Required</sup> <a name="secondaryBlobHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobHost"></a>

```typescript
public readonly secondaryBlobHost: string;
```

- *Type:* string

---

##### `secondaryBlobInternetEndpoint`<sup>Required</sup> <a name="secondaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetEndpoint"></a>

```typescript
public readonly secondaryBlobInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobInternetHost`<sup>Required</sup> <a name="secondaryBlobInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetHost"></a>

```typescript
public readonly secondaryBlobInternetHost: string;
```

- *Type:* string

---

##### `secondaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftEndpoint"></a>

```typescript
public readonly secondaryBlobMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobMicrosoftHost`<sup>Required</sup> <a name="secondaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftHost"></a>

```typescript
public readonly secondaryBlobMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryDfsEndpoint`<sup>Required</sup> <a name="secondaryDfsEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsEndpoint"></a>

```typescript
public readonly secondaryDfsEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsHost`<sup>Required</sup> <a name="secondaryDfsHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsHost"></a>

```typescript
public readonly secondaryDfsHost: string;
```

- *Type:* string

---

##### `secondaryDfsInternetEndpoint`<sup>Required</sup> <a name="secondaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetEndpoint"></a>

```typescript
public readonly secondaryDfsInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsInternetHost`<sup>Required</sup> <a name="secondaryDfsInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetHost"></a>

```typescript
public readonly secondaryDfsInternetHost: string;
```

- *Type:* string

---

##### `secondaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftEndpoint"></a>

```typescript
public readonly secondaryDfsMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsMicrosoftHost`<sup>Required</sup> <a name="secondaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftHost"></a>

```typescript
public readonly secondaryDfsMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryFileEndpoint`<sup>Required</sup> <a name="secondaryFileEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileEndpoint"></a>

```typescript
public readonly secondaryFileEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileHost`<sup>Required</sup> <a name="secondaryFileHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileHost"></a>

```typescript
public readonly secondaryFileHost: string;
```

- *Type:* string

---

##### `secondaryFileInternetEndpoint`<sup>Required</sup> <a name="secondaryFileInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetEndpoint"></a>

```typescript
public readonly secondaryFileInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileInternetHost`<sup>Required</sup> <a name="secondaryFileInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetHost"></a>

```typescript
public readonly secondaryFileInternetHost: string;
```

- *Type:* string

---

##### `secondaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftEndpoint"></a>

```typescript
public readonly secondaryFileMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileMicrosoftHost`<sup>Required</sup> <a name="secondaryFileMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftHost"></a>

```typescript
public readonly secondaryFileMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

---

##### `secondaryQueueEndpoint`<sup>Required</sup> <a name="secondaryQueueEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueEndpoint"></a>

```typescript
public readonly secondaryQueueEndpoint: string;
```

- *Type:* string

---

##### `secondaryQueueHost`<sup>Required</sup> <a name="secondaryQueueHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueHost"></a>

```typescript
public readonly secondaryQueueHost: string;
```

- *Type:* string

---

##### `secondaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftEndpoint"></a>

```typescript
public readonly secondaryQueueMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryQueueMicrosoftHost`<sup>Required</sup> <a name="secondaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftHost"></a>

```typescript
public readonly secondaryQueueMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryTableEndpoint`<sup>Required</sup> <a name="secondaryTableEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableEndpoint"></a>

```typescript
public readonly secondaryTableEndpoint: string;
```

- *Type:* string

---

##### `secondaryTableHost`<sup>Required</sup> <a name="secondaryTableHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableHost"></a>

```typescript
public readonly secondaryTableHost: string;
```

- *Type:* string

---

##### `secondaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftEndpoint"></a>

```typescript
public readonly secondaryTableMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryTableMicrosoftHost`<sup>Required</sup> <a name="secondaryTableMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftHost"></a>

```typescript
public readonly secondaryTableMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryWebEndpoint`<sup>Required</sup> <a name="secondaryWebEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebEndpoint"></a>

```typescript
public readonly secondaryWebEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebHost`<sup>Required</sup> <a name="secondaryWebHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebHost"></a>

```typescript
public readonly secondaryWebHost: string;
```

- *Type:* string

---

##### `secondaryWebInternetEndpoint`<sup>Required</sup> <a name="secondaryWebInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetEndpoint"></a>

```typescript
public readonly secondaryWebInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebInternetHost`<sup>Required</sup> <a name="secondaryWebInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetHost"></a>

```typescript
public readonly secondaryWebInternetHost: string;
```

- *Type:* string

---

##### `secondaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftEndpoint"></a>

```typescript
public readonly secondaryWebMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebMicrosoftHost`<sup>Required</sup> <a name="secondaryWebMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftHost"></a>

```typescript
public readonly secondaryWebMicrosoftHost: string;
```

- *Type:* string

---

##### `tableEncryptionKeyType`<sup>Required</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tableEncryptionKeyType"></a>

```typescript
public readonly tableEncryptionKeyType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference">DataAzurermStorageAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStorageAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountAzureFilesAuthentication <a name="DataAzurermStorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountAzureFilesAuthentication: dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication = { ... }
```


### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory: dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory = { ... }
```


### DataAzurermStorageAccountConfig <a name="DataAzurermStorageAccountConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountConfig: dataAzurermStorageAccount.DataAzurermStorageAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#name DataAzurermStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#resource_group_name DataAzurermStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#id DataAzurermStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#min_tls_version DataAzurermStorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#name DataAzurermStorageAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#resource_group_name DataAzurermStorageAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#id DataAzurermStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#min_tls_version DataAzurermStorageAccount#min_tls_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#timeouts DataAzurermStorageAccount#timeouts}

---

### DataAzurermStorageAccountCustomDomain <a name="DataAzurermStorageAccountCustomDomain" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountCustomDomain: dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain = { ... }
```


### DataAzurermStorageAccountIdentity <a name="DataAzurermStorageAccountIdentity" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountIdentity: dataAzurermStorageAccount.DataAzurermStorageAccountIdentity = { ... }
```


### DataAzurermStorageAccountTimeouts <a name="DataAzurermStorageAccountTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

const dataAzurermStorageAccountTimeouts: dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#read DataAzurermStorageAccount#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/data-sources/storage_account#read DataAzurermStorageAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get"></a>

```typescript
public get(index: number): DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">domainGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">domainSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">forestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">netbiosDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">storageSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainGuid`<sup>Required</sup> <a name="domainGuid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```typescript
public readonly domainGuid: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainSid`<sup>Required</sup> <a name="domainSid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```typescript
public readonly domainSid: string;
```

- *Type:* string

---

##### `forestName`<sup>Required</sup> <a name="forestName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```typescript
public readonly forestName: string;
```

- *Type:* string

---

##### `netbiosDomainName`<sup>Required</sup> <a name="netbiosDomainName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```typescript
public readonly netbiosDomainName: string;
```

- *Type:* string

---

##### `storageSid`<sup>Required</sup> <a name="storageSid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```typescript
public readonly storageSid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### DataAzurermStorageAccountAzureFilesAuthenticationList <a name="DataAzurermStorageAccountAzureFilesAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get"></a>

```typescript
public get(index: number): DataAzurermStorageAccountAzureFilesAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageAccountAzureFilesAuthenticationOutputReference <a name="DataAzurermStorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication">DataAzurermStorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList</a>

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageAccountAzureFilesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication">DataAzurermStorageAccountAzureFilesAuthentication</a>

---


### DataAzurermStorageAccountCustomDomainList <a name="DataAzurermStorageAccountCustomDomainList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get"></a>

```typescript
public get(index: number): DataAzurermStorageAccountCustomDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageAccountCustomDomainOutputReference <a name="DataAzurermStorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain">DataAzurermStorageAccountCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageAccountCustomDomain;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain">DataAzurermStorageAccountCustomDomain</a>

---


### DataAzurermStorageAccountIdentityList <a name="DataAzurermStorageAccountIdentityList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermStorageAccountIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageAccountIdentityOutputReference <a name="DataAzurermStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity">DataAzurermStorageAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageAccountIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity">DataAzurermStorageAccountIdentity</a>

---


### DataAzurermStorageAccountTimeoutsOutputReference <a name="DataAzurermStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccount } from '@cdktf/provider-azurerm'

new dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStorageAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

---



