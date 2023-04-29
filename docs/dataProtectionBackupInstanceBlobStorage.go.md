# `azurerm_data_protection_backup_instance_blob_storage`

Refer to the Terraform Registory for docs: [`azurerm_data_protection_backup_instance_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage).

# `dataProtectionBackupInstanceBlobStorage` Submodule <a name="`dataProtectionBackupInstanceBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceBlobStorage <a name="DataProtectionBackupInstanceBlobStorage" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage azurerm_data_protection_backup_instance_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

dataprotectionbackupinstanceblobstorage.NewDataProtectionBackupInstanceBlobStorage(scope Construct, id *string, config DataProtectionBackupInstanceBlobStorageConfig) DataProtectionBackupInstanceBlobStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig">DataProtectionBackupInstanceBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig">DataProtectionBackupInstanceBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupInstanceBlobStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

dataprotectionbackupinstanceblobstorage.DataProtectionBackupInstanceBlobStorage_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

dataprotectionbackupinstanceblobstorage.DataProtectionBackupInstanceBlobStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

dataprotectionbackupinstanceblobstorage.DataProtectionBackupInstanceBlobStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference">DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference">DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference</a>

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyIdInput"></a>

```go
func BackupPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.backupPolicyId"></a>

```go
func BackupPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceBlobStorageConfig <a name="DataProtectionBackupInstanceBlobStorageConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

&dataprotectionbackupinstanceblobstorage.DataProtectionBackupInstanceBlobStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPolicyId: *string,
	Location: *string,
	Name: *string,
	StorageAccountId: *string,
	VaultId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#backup_policy_id DataProtectionBackupInstanceBlobStorage#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#location DataProtectionBackupInstanceBlobStorage#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#name DataProtectionBackupInstanceBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#storage_account_id DataProtectionBackupInstanceBlobStorage#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#vault_id DataProtectionBackupInstanceBlobStorage#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#id DataProtectionBackupInstanceBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.backupPolicyId"></a>

```go
BackupPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#backup_policy_id DataProtectionBackupInstanceBlobStorage#backup_policy_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#location DataProtectionBackupInstanceBlobStorage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#name DataProtectionBackupInstanceBlobStorage#name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#storage_account_id DataProtectionBackupInstanceBlobStorage#storage_account_id}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#vault_id DataProtectionBackupInstanceBlobStorage#vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#id DataProtectionBackupInstanceBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupInstanceBlobStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts">DataProtectionBackupInstanceBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#timeouts DataProtectionBackupInstanceBlobStorage#timeouts}

---

### DataProtectionBackupInstanceBlobStorageTimeouts <a name="DataProtectionBackupInstanceBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

&dataprotectionbackupinstanceblobstorage.DataProtectionBackupInstanceBlobStorageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#create DataProtectionBackupInstanceBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#delete DataProtectionBackupInstanceBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#read DataProtectionBackupInstanceBlobStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#update DataProtectionBackupInstanceBlobStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#create DataProtectionBackupInstanceBlobStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#delete DataProtectionBackupInstanceBlobStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#read DataProtectionBackupInstanceBlobStorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_protection_backup_instance_blob_storage#update DataProtectionBackupInstanceBlobStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference <a name="DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackupinstanceblobstorage"

dataprotectionbackupinstanceblobstorage.NewDataProtectionBackupInstanceBlobStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceBlobStorage.DataProtectionBackupInstanceBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



