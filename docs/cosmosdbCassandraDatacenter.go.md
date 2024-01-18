# `cosmosdbCassandraDatacenter` Submodule <a name="`cosmosdbCassandraDatacenter` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraDatacenter <a name="CosmosdbCassandraDatacenter" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.NewCosmosdbCassandraDatacenter(scope Construct, id *string, config CosmosdbCassandraDatacenterConfig) CosmosdbCassandraDatacenter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig">CosmosdbCassandraDatacenterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig">CosmosdbCassandraDatacenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled">ResetAvailabilityZonesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri">ResetBackupStorageCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment">ResetBase64EncodedYamlFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount">ResetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku">ResetDiskSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri">ResetManagedDiskCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts"></a>

```go
func PutTimeouts(value CosmosdbCassandraDatacenterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

---

##### `ResetAvailabilityZonesEnabled` <a name="ResetAvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled"></a>

```go
func ResetAvailabilityZonesEnabled()
```

##### `ResetBackupStorageCustomerKeyUri` <a name="ResetBackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri"></a>

```go
func ResetBackupStorageCustomerKeyUri()
```

##### `ResetBase64EncodedYamlFragment` <a name="ResetBase64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment"></a>

```go
func ResetBase64EncodedYamlFragment()
```

##### `ResetDiskCount` <a name="ResetDiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount"></a>

```go
func ResetDiskCount()
```

##### `ResetDiskSku` <a name="ResetDiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku"></a>

```go
func ResetDiskSku()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedDiskCustomerKeyUri` <a name="ResetManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri"></a>

```go
func ResetManagedDiskCustomerKeyUri()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName"></a>

```go
func ResetSkuName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbCassandraDatacenter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.CosmosdbCassandraDatacenter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.CosmosdbCassandraDatacenter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.CosmosdbCassandraDatacenter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.CosmosdbCassandraDatacenter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CosmosdbCassandraDatacenter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CosmosdbCassandraDatacenter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CosmosdbCassandraDatacenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbCassandraDatacenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.seedNodeIpAddresses">SeedNodeIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput">AvailabilityZonesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput">BackupStorageCustomerKeyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput">Base64EncodedYamlFragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput">CassandraClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput">DelegatedManagementSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput">DiskCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput">DiskSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput">ManagedDiskCustomerKeyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled">AvailabilityZonesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri">BackupStorageCustomerKeyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment">Base64EncodedYamlFragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId">CassandraClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId">DelegatedManagementSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount">DiskCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku">DiskSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri">ManagedDiskCustomerKeyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SeedNodeIpAddresses`<sup>Required</sup> <a name="SeedNodeIpAddresses" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.seedNodeIpAddresses"></a>

```go
func SeedNodeIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts"></a>

```go
func Timeouts() CosmosdbCassandraDatacenterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a>

---

##### `AvailabilityZonesEnabledInput`<sup>Optional</sup> <a name="AvailabilityZonesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput"></a>

```go
func AvailabilityZonesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupStorageCustomerKeyUriInput`<sup>Optional</sup> <a name="BackupStorageCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput"></a>

```go
func BackupStorageCustomerKeyUriInput() *string
```

- *Type:* *string

---

##### `Base64EncodedYamlFragmentInput`<sup>Optional</sup> <a name="Base64EncodedYamlFragmentInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput"></a>

```go
func Base64EncodedYamlFragmentInput() *string
```

- *Type:* *string

---

##### `CassandraClusterIdInput`<sup>Optional</sup> <a name="CassandraClusterIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput"></a>

```go
func CassandraClusterIdInput() *string
```

- *Type:* *string

---

##### `DelegatedManagementSubnetIdInput`<sup>Optional</sup> <a name="DelegatedManagementSubnetIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput"></a>

```go
func DelegatedManagementSubnetIdInput() *string
```

- *Type:* *string

---

##### `DiskCountInput`<sup>Optional</sup> <a name="DiskCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput"></a>

```go
func DiskCountInput() *f64
```

- *Type:* *f64

---

##### `DiskSkuInput`<sup>Optional</sup> <a name="DiskSkuInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput"></a>

```go
func DiskSkuInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedDiskCustomerKeyUriInput`<sup>Optional</sup> <a name="ManagedDiskCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput"></a>

```go
func ManagedDiskCustomerKeyUriInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesEnabled`<sup>Required</sup> <a name="AvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled"></a>

```go
func AvailabilityZonesEnabled() interface{}
```

- *Type:* interface{}

---

##### `BackupStorageCustomerKeyUri`<sup>Required</sup> <a name="BackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri"></a>

```go
func BackupStorageCustomerKeyUri() *string
```

- *Type:* *string

---

##### `Base64EncodedYamlFragment`<sup>Required</sup> <a name="Base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment"></a>

```go
func Base64EncodedYamlFragment() *string
```

- *Type:* *string

---

##### `CassandraClusterId`<sup>Required</sup> <a name="CassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId"></a>

```go
func CassandraClusterId() *string
```

- *Type:* *string

---

##### `DelegatedManagementSubnetId`<sup>Required</sup> <a name="DelegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId"></a>

```go
func DelegatedManagementSubnetId() *string
```

- *Type:* *string

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount"></a>

```go
func DiskCount() *f64
```

- *Type:* *f64

---

##### `DiskSku`<sup>Required</sup> <a name="DiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku"></a>

```go
func DiskSku() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedDiskCustomerKeyUri`<sup>Required</sup> <a name="ManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri"></a>

```go
func ManagedDiskCustomerKeyUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraDatacenterConfig <a name="CosmosdbCassandraDatacenterConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

&cosmosdbcassandradatacenter.CosmosdbCassandraDatacenterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CassandraClusterId: *string,
	DelegatedManagementSubnetId: *string,
	Location: *string,
	Name: *string,
	AvailabilityZonesEnabled: interface{},
	BackupStorageCustomerKeyUri: *string,
	Base64EncodedYamlFragment: *string,
	DiskCount: *f64,
	DiskSku: *string,
	Id: *string,
	ManagedDiskCustomerKeyUri: *string,
	NodeCount: *f64,
	SkuName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId">CassandraClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId">DelegatedManagementSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled">AvailabilityZonesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri">BackupStorageCustomerKeyUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment">Base64EncodedYamlFragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount">DiskCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku">DiskSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri">ManagedDiskCustomerKeyUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CassandraClusterId`<sup>Required</sup> <a name="CassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId"></a>

```go
CassandraClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `DelegatedManagementSubnetId`<sup>Required</sup> <a name="DelegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId"></a>

```go
DelegatedManagementSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `AvailabilityZonesEnabled`<sup>Optional</sup> <a name="AvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled"></a>

```go
AvailabilityZonesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `BackupStorageCustomerKeyUri`<sup>Optional</sup> <a name="BackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri"></a>

```go
BackupStorageCustomerKeyUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `Base64EncodedYamlFragment`<sup>Optional</sup> <a name="Base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment"></a>

```go
Base64EncodedYamlFragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `DiskCount`<sup>Optional</sup> <a name="DiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount"></a>

```go
DiskCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `DiskSku`<sup>Optional</sup> <a name="DiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku"></a>

```go
DiskSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDiskCustomerKeyUri`<sup>Optional</sup> <a name="ManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri"></a>

```go
ManagedDiskCustomerKeyUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts"></a>

```go
Timeouts CosmosdbCassandraDatacenterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

### CosmosdbCassandraDatacenterTimeouts <a name="CosmosdbCassandraDatacenterTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

&cosmosdbcassandradatacenter.CosmosdbCassandraDatacenterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraDatacenterTimeoutsOutputReference <a name="CosmosdbCassandraDatacenterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbcassandradatacenter"

cosmosdbcassandradatacenter.NewCosmosdbCassandraDatacenterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbCassandraDatacenterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



