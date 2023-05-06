# `azurerm_data_protection_backup_instance_blob_storage`

Refer to the Terraform Registory for docs: [`azurerm_data_protection_backup_instance_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage).

# `dataProtectionBackupInstanceBlobStorage` Submodule <a name="`dataProtectionBackupInstanceBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceBlobStorage <a name="DataProtectionBackupInstanceBlobStorage" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage azurerm_data_protection_backup_instance_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage(scope: Construct, id: string, config: DataProtectionBackupInstanceBlobStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig">DataProtectionBackupInstanceBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig">DataProtectionBackupInstanceBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupInstanceBlobStorageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference">DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference">DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference</a>

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyIdInput"></a>

```typescript
public readonly backupPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataProtectionBackupInstanceBlobStorageTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a> | cdktf.IResolvable

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceBlobStorageConfig <a name="DataProtectionBackupInstanceBlobStorageConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstanceBlobStorageConfig: dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#backup_policy_id DataProtectionBackupInstanceBlobStorage#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#location DataProtectionBackupInstanceBlobStorage#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#name DataProtectionBackupInstanceBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#storage_account_id DataProtectionBackupInstanceBlobStorage#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#vault_id DataProtectionBackupInstanceBlobStorage#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#id DataProtectionBackupInstanceBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#backup_policy_id DataProtectionBackupInstanceBlobStorage#backup_policy_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#location DataProtectionBackupInstanceBlobStorage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#name DataProtectionBackupInstanceBlobStorage#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#storage_account_id DataProtectionBackupInstanceBlobStorage#storage_account_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#vault_id DataProtectionBackupInstanceBlobStorage#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#id DataProtectionBackupInstanceBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstanceBlobStorageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#timeouts DataProtectionBackupInstanceBlobStorage#timeouts}

---

### DataProtectionBackupInstanceBlobStorageTimeouts <a name="DataProtectionBackupInstanceBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstanceBlobStorageTimeouts: dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#create DataProtectionBackupInstanceBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#delete DataProtectionBackupInstanceBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#read DataProtectionBackupInstanceBlobStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#update DataProtectionBackupInstanceBlobStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#create DataProtectionBackupInstanceBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#delete DataProtectionBackupInstanceBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#read DataProtectionBackupInstanceBlobStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_protection_backup_instance_blob_storage#update DataProtectionBackupInstanceBlobStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference <a name="DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceBlobStorage } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupInstanceBlobStorageTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a> | cdktf.IResolvable

---



