# `azurerm_resource_group_cost_management_export`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_cost_management_export`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export).

# `resourceGroupCostManagementExport` Submodule <a name="`resourceGroupCostManagementExport` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementExport <a name="ResourceGroupCostManagementExport" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export azurerm_resource_group_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.NewResourceGroupCostManagementExport(scope Construct, id *string, config ResourceGroupCostManagementExportConfig) ResourceGroupCostManagementExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig">ResourceGroupCostManagementExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig">ResourceGroupCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions">PutExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation">PutExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExportDataOptions` <a name="PutExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions"></a>

```go
func PutExportDataOptions(value ResourceGroupCostManagementExportExportDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `PutExportDataStorageLocation` <a name="PutExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation"></a>

```go
func PutExportDataStorageLocation(value ResourceGroupCostManagementExportExportDataStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts"></a>

```go
func PutTimeouts(value ResourceGroupCostManagementExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive"></a>

```go
func ResetActive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.ResourceGroupCostManagementExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.ResourceGroupCostManagementExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.ResourceGroupCostManagementExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput">ExportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput">ExportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput">RecurrencePeriodEndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput">RecurrencePeriodStartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions"></a>

```go
func ExportDataOptions() ResourceGroupCostManagementExportExportDataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a>

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation"></a>

```go
func ExportDataStorageLocation() ResourceGroupCostManagementExportExportDataStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts"></a>

```go
func Timeouts() ResourceGroupCostManagementExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `ExportDataOptionsInput`<sup>Optional</sup> <a name="ExportDataOptionsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput"></a>

```go
func ExportDataOptionsInput() ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `ExportDataStorageLocationInput`<sup>Optional</sup> <a name="ExportDataStorageLocationInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput"></a>

```go
func ExportDataStorageLocationInput() ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecurrencePeriodEndDateInput`<sup>Optional</sup> <a name="RecurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```go
func RecurrencePeriodEndDateInput() *string
```

- *Type:* *string

---

##### `RecurrencePeriodStartDateInput`<sup>Optional</sup> <a name="RecurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```go
func RecurrencePeriodStartDateInput() *string
```

- *Type:* *string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput"></a>

```go
func RecurrenceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput"></a>

```go
func ResourceGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate"></a>

```go
func RecurrencePeriodEndDate() *string
```

- *Type:* *string

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate"></a>

```go
func RecurrencePeriodStartDate() *string
```

- *Type:* *string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType"></a>

```go
func RecurrenceType() *string
```

- *Type:* *string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId"></a>

```go
func ResourceGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementExportConfig <a name="ResourceGroupCostManagementExportConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

&resourcegroupcostmanagementexport.ResourceGroupCostManagementExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExportDataOptions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions,
	ExportDataStorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation,
	Name: *string,
	RecurrencePeriodEndDate: *string,
	RecurrencePeriodStartDate: *string,
	RecurrenceType: *string,
	ResourceGroupId: *string,
	Active: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions"></a>

```go
ExportDataOptions ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation"></a>

```go
ExportDataStorageLocation ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```go
RecurrencePeriodEndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```go
RecurrencePeriodStartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType"></a>

```go
RecurrenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId"></a>

```go
ResourceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts"></a>

```go
Timeouts ResourceGroupCostManagementExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

### ResourceGroupCostManagementExportExportDataOptions <a name="ResourceGroupCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

&resourcegroupcostmanagementexport.ResourceGroupCostManagementExportExportDataOptions {
	TimeFrame: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame">TimeFrame</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}. |

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame"></a>

```go
TimeFrame *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}.

---

### ResourceGroupCostManagementExportExportDataStorageLocation <a name="ResourceGroupCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

&resourcegroupcostmanagementexport.ResourceGroupCostManagementExportExportDataStorageLocation {
	ContainerId: *string,
	RootFolderPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId">ContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath">RootFolderPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}.

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```go
RootFolderPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}.

---

### ResourceGroupCostManagementExportTimeouts <a name="ResourceGroupCostManagementExportTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

&resourcegroupcostmanagementexport.ResourceGroupCostManagementExportTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementExportExportDataOptionsOutputReference <a name="ResourceGroupCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.NewResourceGroupCostManagementExportExportDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceGroupCostManagementExportExportDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">TimeFrameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame">TimeFrame</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeFrameInput`<sup>Optional</sup> <a name="TimeFrameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```go
func TimeFrameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```go
func TimeFrame() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceGroupCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---


### ResourceGroupCostManagementExportExportDataStorageLocationOutputReference <a name="ResourceGroupCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.NewResourceGroupCostManagementExportExportDataStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceGroupCostManagementExportExportDataStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">RootFolderPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">RootFolderPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `RootFolderPathInput`<sup>Optional</sup> <a name="RootFolderPathInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```go
func RootFolderPathInput() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```go
func RootFolderPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceGroupCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---


### ResourceGroupCostManagementExportTimeoutsOutputReference <a name="ResourceGroupCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/resourcegroupcostmanagementexport"

resourcegroupcostmanagementexport.NewResourceGroupCostManagementExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceGroupCostManagementExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



