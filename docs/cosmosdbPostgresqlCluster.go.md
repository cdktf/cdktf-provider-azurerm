# `cosmosdbPostgresqlCluster` Submodule <a name="`cosmosdbPostgresqlCluster` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlCluster <a name="CosmosdbPostgresqlCluster" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster azurerm_cosmosdb_postgresql_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.NewCosmosdbPostgresqlCluster(scope Construct, id *string, config CosmosdbPostgresqlClusterConfig) CosmosdbPostgresqlCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig">CosmosdbPostgresqlClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig">CosmosdbPostgresqlClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword">ResetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion">ResetCitusVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled">ResetCoordinatorPublicIpAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition">ResetCoordinatorServerEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb">ResetCoordinatorStorageQuotaInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount">ResetCoordinatorVcoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled">ResetHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled">ResetNodePublicIpAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition">ResetNodeServerEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb">ResetNodeStorageQuotaInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores">ResetNodeVcores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc">ResetPointInTimeInUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone">ResetPreferredPrimaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled">ResetShardsOnCoordinatorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation">ResetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId">ResetSourceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion">ResetSqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value CosmosdbPostgresqlClusterMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts"></a>

```go
func PutTimeouts(value CosmosdbPostgresqlClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

---

##### `ResetAdministratorLoginPassword` <a name="ResetAdministratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword"></a>

```go
func ResetAdministratorLoginPassword()
```

##### `ResetCitusVersion` <a name="ResetCitusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion"></a>

```go
func ResetCitusVersion()
```

##### `ResetCoordinatorPublicIpAccessEnabled` <a name="ResetCoordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled"></a>

```go
func ResetCoordinatorPublicIpAccessEnabled()
```

##### `ResetCoordinatorServerEdition` <a name="ResetCoordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition"></a>

```go
func ResetCoordinatorServerEdition()
```

##### `ResetCoordinatorStorageQuotaInMb` <a name="ResetCoordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb"></a>

```go
func ResetCoordinatorStorageQuotaInMb()
```

##### `ResetCoordinatorVcoreCount` <a name="ResetCoordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount"></a>

```go
func ResetCoordinatorVcoreCount()
```

##### `ResetHaEnabled` <a name="ResetHaEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled"></a>

```go
func ResetHaEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetNodePublicIpAccessEnabled` <a name="ResetNodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled"></a>

```go
func ResetNodePublicIpAccessEnabled()
```

##### `ResetNodeServerEdition` <a name="ResetNodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition"></a>

```go
func ResetNodeServerEdition()
```

##### `ResetNodeStorageQuotaInMb` <a name="ResetNodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb"></a>

```go
func ResetNodeStorageQuotaInMb()
```

##### `ResetNodeVcores` <a name="ResetNodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores"></a>

```go
func ResetNodeVcores()
```

##### `ResetPointInTimeInUtc` <a name="ResetPointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc"></a>

```go
func ResetPointInTimeInUtc()
```

##### `ResetPreferredPrimaryZone` <a name="ResetPreferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone"></a>

```go
func ResetPreferredPrimaryZone()
```

##### `ResetShardsOnCoordinatorEnabled` <a name="ResetShardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled"></a>

```go
func ResetShardsOnCoordinatorEnabled()
```

##### `ResetSourceLocation` <a name="ResetSourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation"></a>

```go
func ResetSourceLocation()
```

##### `ResetSourceResourceId` <a name="ResetSourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId"></a>

```go
func ResetSourceResourceId()
```

##### `ResetSqlVersion` <a name="ResetSqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion"></a>

```go
func ResetSqlVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.CosmosdbPostgresqlCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.CosmosdbPostgresqlCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.CosmosdbPostgresqlCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.CosmosdbPostgresqlCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CosmosdbPostgresqlCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CosmosdbPostgresqlCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime">EarliestRestoreTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers">Servers</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput">CitusVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput">CoordinatorPublicIpAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput">CoordinatorServerEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput">CoordinatorStorageQuotaInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput">CoordinatorVcoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput">HaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput">NodePublicIpAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput">NodeServerEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput">NodeStorageQuotaInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput">NodeVcoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput">PointInTimeInUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput">PreferredPrimaryZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput">ShardsOnCoordinatorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput">SourceLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput">SqlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion">CitusVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled">CoordinatorPublicIpAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition">CoordinatorServerEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb">CoordinatorStorageQuotaInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount">CoordinatorVcoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled">HaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled">NodePublicIpAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition">NodeServerEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb">NodeStorageQuotaInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores">NodeVcores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc">PointInTimeInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone">PreferredPrimaryZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled">ShardsOnCoordinatorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion">SqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EarliestRestoreTime`<sup>Required</sup> <a name="EarliestRestoreTime" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime"></a>

```go
func EarliestRestoreTime() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() CosmosdbPostgresqlClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a>

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers"></a>

```go
func Servers() CosmosdbPostgresqlClusterServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts"></a>

```go
func Timeouts() CosmosdbPostgresqlClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a>

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput"></a>

```go
func AdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `CitusVersionInput`<sup>Optional</sup> <a name="CitusVersionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput"></a>

```go
func CitusVersionInput() *string
```

- *Type:* *string

---

##### `CoordinatorPublicIpAccessEnabledInput`<sup>Optional</sup> <a name="CoordinatorPublicIpAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput"></a>

```go
func CoordinatorPublicIpAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CoordinatorServerEditionInput`<sup>Optional</sup> <a name="CoordinatorServerEditionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput"></a>

```go
func CoordinatorServerEditionInput() *string
```

- *Type:* *string

---

##### `CoordinatorStorageQuotaInMbInput`<sup>Optional</sup> <a name="CoordinatorStorageQuotaInMbInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput"></a>

```go
func CoordinatorStorageQuotaInMbInput() *f64
```

- *Type:* *f64

---

##### `CoordinatorVcoreCountInput`<sup>Optional</sup> <a name="CoordinatorVcoreCountInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput"></a>

```go
func CoordinatorVcoreCountInput() *f64
```

- *Type:* *f64

---

##### `HaEnabledInput`<sup>Optional</sup> <a name="HaEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput"></a>

```go
func HaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NodePublicIpAccessEnabledInput`<sup>Optional</sup> <a name="NodePublicIpAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput"></a>

```go
func NodePublicIpAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeServerEditionInput`<sup>Optional</sup> <a name="NodeServerEditionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput"></a>

```go
func NodeServerEditionInput() *string
```

- *Type:* *string

---

##### `NodeStorageQuotaInMbInput`<sup>Optional</sup> <a name="NodeStorageQuotaInMbInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput"></a>

```go
func NodeStorageQuotaInMbInput() *f64
```

- *Type:* *f64

---

##### `NodeVcoresInput`<sup>Optional</sup> <a name="NodeVcoresInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput"></a>

```go
func NodeVcoresInput() *f64
```

- *Type:* *f64

---

##### `PointInTimeInUtcInput`<sup>Optional</sup> <a name="PointInTimeInUtcInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput"></a>

```go
func PointInTimeInUtcInput() *string
```

- *Type:* *string

---

##### `PreferredPrimaryZoneInput`<sup>Optional</sup> <a name="PreferredPrimaryZoneInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput"></a>

```go
func PreferredPrimaryZoneInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ShardsOnCoordinatorEnabledInput`<sup>Optional</sup> <a name="ShardsOnCoordinatorEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput"></a>

```go
func ShardsOnCoordinatorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput"></a>

```go
func SourceLocationInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `SqlVersionInput`<sup>Optional</sup> <a name="SqlVersionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput"></a>

```go
func SqlVersionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword"></a>

```go
func AdministratorLoginPassword() *string
```

- *Type:* *string

---

##### `CitusVersion`<sup>Required</sup> <a name="CitusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion"></a>

```go
func CitusVersion() *string
```

- *Type:* *string

---

##### `CoordinatorPublicIpAccessEnabled`<sup>Required</sup> <a name="CoordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled"></a>

```go
func CoordinatorPublicIpAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `CoordinatorServerEdition`<sup>Required</sup> <a name="CoordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition"></a>

```go
func CoordinatorServerEdition() *string
```

- *Type:* *string

---

##### `CoordinatorStorageQuotaInMb`<sup>Required</sup> <a name="CoordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb"></a>

```go
func CoordinatorStorageQuotaInMb() *f64
```

- *Type:* *f64

---

##### `CoordinatorVcoreCount`<sup>Required</sup> <a name="CoordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount"></a>

```go
func CoordinatorVcoreCount() *f64
```

- *Type:* *f64

---

##### `HaEnabled`<sup>Required</sup> <a name="HaEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled"></a>

```go
func HaEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodePublicIpAccessEnabled`<sup>Required</sup> <a name="NodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled"></a>

```go
func NodePublicIpAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `NodeServerEdition`<sup>Required</sup> <a name="NodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition"></a>

```go
func NodeServerEdition() *string
```

- *Type:* *string

---

##### `NodeStorageQuotaInMb`<sup>Required</sup> <a name="NodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb"></a>

```go
func NodeStorageQuotaInMb() *f64
```

- *Type:* *f64

---

##### `NodeVcores`<sup>Required</sup> <a name="NodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores"></a>

```go
func NodeVcores() *f64
```

- *Type:* *f64

---

##### `PointInTimeInUtc`<sup>Required</sup> <a name="PointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc"></a>

```go
func PointInTimeInUtc() *string
```

- *Type:* *string

---

##### `PreferredPrimaryZone`<sup>Required</sup> <a name="PreferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone"></a>

```go
func PreferredPrimaryZone() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ShardsOnCoordinatorEnabled`<sup>Required</sup> <a name="ShardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled"></a>

```go
func ShardsOnCoordinatorEnabled() interface{}
```

- *Type:* interface{}

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation"></a>

```go
func SourceLocation() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `SqlVersion`<sup>Required</sup> <a name="SqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion"></a>

```go
func SqlVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlClusterConfig <a name="CosmosdbPostgresqlClusterConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

&cosmosdbpostgresqlcluster.CosmosdbPostgresqlClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NodeCount: *f64,
	ResourceGroupName: *string,
	AdministratorLoginPassword: *string,
	CitusVersion: *string,
	CoordinatorPublicIpAccessEnabled: interface{},
	CoordinatorServerEdition: *string,
	CoordinatorStorageQuotaInMb: *f64,
	CoordinatorVcoreCount: *f64,
	HaEnabled: interface{},
	Id: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow,
	NodePublicIpAccessEnabled: interface{},
	NodeServerEdition: *string,
	NodeStorageQuotaInMb: *f64,
	NodeVcores: *f64,
	PointInTimeInUtc: *string,
	PreferredPrimaryZone: *string,
	ShardsOnCoordinatorEnabled: interface{},
	SourceLocation: *string,
	SourceResourceId: *string,
	SqlVersion: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion">CitusVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled">CoordinatorPublicIpAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition">CoordinatorServerEdition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb">CoordinatorStorageQuotaInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount">CoordinatorVcoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled">HaEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled">NodePublicIpAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition">NodeServerEdition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb">NodeStorageQuotaInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores">NodeVcores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc">PointInTimeInUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone">PreferredPrimaryZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled">ShardsOnCoordinatorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion">SqlVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}.

---

##### `AdministratorLoginPassword`<sup>Optional</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword"></a>

```go
AdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}.

---

##### `CitusVersion`<sup>Optional</sup> <a name="CitusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion"></a>

```go
CitusVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}.

---

##### `CoordinatorPublicIpAccessEnabled`<sup>Optional</sup> <a name="CoordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled"></a>

```go
CoordinatorPublicIpAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}.

---

##### `CoordinatorServerEdition`<sup>Optional</sup> <a name="CoordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition"></a>

```go
CoordinatorServerEdition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}.

---

##### `CoordinatorStorageQuotaInMb`<sup>Optional</sup> <a name="CoordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb"></a>

```go
CoordinatorStorageQuotaInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}.

---

##### `CoordinatorVcoreCount`<sup>Optional</sup> <a name="CoordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount"></a>

```go
CoordinatorVcoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}.

---

##### `HaEnabled`<sup>Optional</sup> <a name="HaEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled"></a>

```go
HaEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#maintenance_window CosmosdbPostgresqlCluster#maintenance_window}

---

##### `NodePublicIpAccessEnabled`<sup>Optional</sup> <a name="NodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled"></a>

```go
NodePublicIpAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}.

---

##### `NodeServerEdition`<sup>Optional</sup> <a name="NodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition"></a>

```go
NodeServerEdition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}.

---

##### `NodeStorageQuotaInMb`<sup>Optional</sup> <a name="NodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb"></a>

```go
NodeStorageQuotaInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}.

---

##### `NodeVcores`<sup>Optional</sup> <a name="NodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores"></a>

```go
NodeVcores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}.

---

##### `PointInTimeInUtc`<sup>Optional</sup> <a name="PointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc"></a>

```go
PointInTimeInUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}.

---

##### `PreferredPrimaryZone`<sup>Optional</sup> <a name="PreferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone"></a>

```go
PreferredPrimaryZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}.

---

##### `ShardsOnCoordinatorEnabled`<sup>Optional</sup> <a name="ShardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled"></a>

```go
ShardsOnCoordinatorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}.

---

##### `SourceLocation`<sup>Optional</sup> <a name="SourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation"></a>

```go
SourceLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}.

---

##### `SourceResourceId`<sup>Optional</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}.

---

##### `SqlVersion`<sup>Optional</sup> <a name="SqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion"></a>

```go
SqlVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts"></a>

```go
Timeouts CosmosdbPostgresqlClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#timeouts CosmosdbPostgresqlCluster#timeouts}

---

### CosmosdbPostgresqlClusterMaintenanceWindow <a name="CosmosdbPostgresqlClusterMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

&cosmosdbpostgresqlcluster.CosmosdbPostgresqlClusterMaintenanceWindow {
	DayOfWeek: *f64,
	StartHour: *f64,
	StartMinute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour">StartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute">StartMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek"></a>

```go
DayOfWeek *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}.

---

##### `StartHour`<sup>Optional</sup> <a name="StartHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour"></a>

```go
StartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}.

---

##### `StartMinute`<sup>Optional</sup> <a name="StartMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute"></a>

```go
StartMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}.

---

### CosmosdbPostgresqlClusterServers <a name="CosmosdbPostgresqlClusterServers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

&cosmosdbpostgresqlcluster.CosmosdbPostgresqlClusterServers {

}
```


### CosmosdbPostgresqlClusterTimeouts <a name="CosmosdbPostgresqlClusterTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

&cosmosdbpostgresqlcluster.CosmosdbPostgresqlClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlClusterMaintenanceWindowOutputReference <a name="CosmosdbPostgresqlClusterMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.NewCosmosdbPostgresqlClusterMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbPostgresqlClusterMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour">ResetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute">ResetStartMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```go
func ResetDayOfWeek()
```

##### `ResetStartHour` <a name="ResetStartHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour"></a>

```go
func ResetStartHour()
```

##### `ResetStartMinute` <a name="ResetStartMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute"></a>

```go
func ResetStartMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput">StartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput">StartMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour">StartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute">StartMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *f64
```

- *Type:* *f64

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput"></a>

```go
func StartHourInput() *f64
```

- *Type:* *f64

---

##### `StartMinuteInput`<sup>Optional</sup> <a name="StartMinuteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```go
func StartMinuteInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *f64
```

- *Type:* *f64

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour"></a>

```go
func StartHour() *f64
```

- *Type:* *f64

---

##### `StartMinute`<sup>Required</sup> <a name="StartMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute"></a>

```go
func StartMinute() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---


### CosmosdbPostgresqlClusterServersList <a name="CosmosdbPostgresqlClusterServersList" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.NewCosmosdbPostgresqlClusterServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbPostgresqlClusterServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get"></a>

```go
func Get(index *f64) CosmosdbPostgresqlClusterServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CosmosdbPostgresqlClusterServersOutputReference <a name="CosmosdbPostgresqlClusterServersOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.NewCosmosdbPostgresqlClusterServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbPostgresqlClusterServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbPostgresqlClusterServers
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a>

---


### CosmosdbPostgresqlClusterTimeoutsOutputReference <a name="CosmosdbPostgresqlClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/cosmosdbpostgresqlcluster"

cosmosdbpostgresqlcluster.NewCosmosdbPostgresqlClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbPostgresqlClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



