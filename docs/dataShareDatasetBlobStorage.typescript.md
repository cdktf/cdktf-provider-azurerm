# `azurerm_data_share_dataset_blob_storage`

Refer to the Terraform Registory for docs: [`azurerm_data_share_dataset_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage).

# `dataShareDatasetBlobStorage` Submodule <a name="`dataShareDatasetBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetBlobStorage <a name="DataShareDatasetBlobStorage" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage azurerm_data_share_dataset_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

new dataShareDatasetBlobStorage.DataShareDatasetBlobStorage(scope: Construct, id: string, config: DataShareDatasetBlobStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig">DataShareDatasetBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig">DataShareDatasetBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath">resetFolderPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount"></a>

```typescript
public putStorageAccount(value: DataShareDatasetBlobStorageStorageAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts"></a>

```typescript
public putTimeouts(value: DataShareDatasetBlobStorageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

---

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFilePath"></a>

```typescript
public resetFilePath(): void
```

##### `resetFolderPath` <a name="resetFolderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetFolderPath"></a>

```typescript
public resetFolderPath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput">dataShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput">folderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput">storageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId">dataShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath">folderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccount"></a>

```typescript
public readonly storageAccount: DataShareDatasetBlobStorageStorageAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference">DataShareDatasetBlobStorageStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeouts"></a>

```typescript
public readonly timeouts: DataShareDatasetBlobStorageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference">DataShareDatasetBlobStorageTimeoutsOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `dataShareIdInput`<sup>Optional</sup> <a name="dataShareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareIdInput"></a>

```typescript
public readonly dataShareIdInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `folderPathInput`<sup>Optional</sup> <a name="folderPathInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPathInput"></a>

```typescript
public readonly folderPathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: DataShareDatasetBlobStorageStorageAccount;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataShareDatasetBlobStorageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `dataShareId`<sup>Required</sup> <a name="dataShareId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.dataShareId"></a>

```typescript
public readonly dataShareId: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `folderPath`<sup>Required</sup> <a name="folderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.folderPath"></a>

```typescript
public readonly folderPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetBlobStorageConfig <a name="DataShareDatasetBlobStorageConfig" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

const dataShareDatasetBlobStorageConfig: dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId">dataShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath">folderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#container_name DataShareDatasetBlobStorage#container_name}.

---

##### `dataShareId`<sup>Required</sup> <a name="dataShareId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.dataShareId"></a>

```typescript
public readonly dataShareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#data_share_id DataShareDatasetBlobStorage#data_share_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.storageAccount"></a>

```typescript
public readonly storageAccount: DataShareDatasetBlobStorageStorageAccount;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#storage_account DataShareDatasetBlobStorage#storage_account}

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#file_path DataShareDatasetBlobStorage#file_path}.

---

##### `folderPath`<sup>Optional</sup> <a name="folderPath" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.folderPath"></a>

```typescript
public readonly folderPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#folder_path DataShareDatasetBlobStorage#folder_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#id DataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataShareDatasetBlobStorageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#timeouts DataShareDatasetBlobStorage#timeouts}

---

### DataShareDatasetBlobStorageStorageAccount <a name="DataShareDatasetBlobStorageStorageAccount" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

const dataShareDatasetBlobStorageStorageAccount: dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#name DataShareDatasetBlobStorage#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#resource_group_name DataShareDatasetBlobStorage#resource_group_name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#subscription_id DataShareDatasetBlobStorage#subscription_id}.

---

### DataShareDatasetBlobStorageTimeouts <a name="DataShareDatasetBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

const dataShareDatasetBlobStorageTimeouts: dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#create DataShareDatasetBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#delete DataShareDatasetBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/data_share_dataset_blob_storage#read DataShareDatasetBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetBlobStorageStorageAccountOutputReference <a name="DataShareDatasetBlobStorageStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

new dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataShareDatasetBlobStorageStorageAccount;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageStorageAccount">DataShareDatasetBlobStorageStorageAccount</a>

---


### DataShareDatasetBlobStorageTimeoutsOutputReference <a name="DataShareDatasetBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataShareDatasetBlobStorage } from '@cdktf/provider-azurerm'

new dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataShareDatasetBlobStorageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataShareDatasetBlobStorage.DataShareDatasetBlobStorageTimeouts">DataShareDatasetBlobStorageTimeouts</a>

---



