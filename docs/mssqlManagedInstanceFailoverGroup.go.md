# `azurerm_mssql_managed_instance_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_mssql_managed_instance_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group).

# `mssqlManagedInstanceFailoverGroup` Submodule <a name="`mssqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceFailoverGroup <a name="MssqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group azurerm_mssql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.NewMssqlManagedInstanceFailoverGroup(scope Construct, id *string, config MssqlManagedInstanceFailoverGroupConfig) MssqlManagedInstanceFailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig">MssqlManagedInstanceFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig">MssqlManagedInstanceFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">PutReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">ResetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReadWriteEndpointFailoverPolicy` <a name="PutReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```go
func PutReadWriteEndpointFailoverPolicy(value MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts"></a>

```go
func PutTimeouts(value MssqlManagedInstanceFailoverGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetReadonlyEndpointFailoverPolicyEnabled` <a name="ResetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```go
func ResetReadonlyEndpointFailoverPolicyEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion">PartnerRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">PartnerManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">ReadonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">ReadWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">PartnerManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartnerRegion`<sup>Required</sup> <a name="PartnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```go
func PartnerRegion() MssqlManagedInstanceFailoverGroupPartnerRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```go
func ReadWriteEndpointFailoverPolicy() MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts"></a>

```go
func Timeouts() MssqlManagedInstanceFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerManagedInstanceIdInput`<sup>Optional</sup> <a name="PartnerManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```go
func PartnerManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ReadonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="ReadWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```go
func ReadWriteEndpointFailoverPolicyInput() MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerManagedInstanceId`<sup>Required</sup> <a name="PartnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```go
func PartnerManagedInstanceId() *string
```

- *Type:* *string

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceFailoverGroupConfig <a name="MssqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

&mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagedInstanceId: *string,
	Name: *string,
	PartnerManagedInstanceId: *string,
	ReadWriteEndpointFailoverPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy,
	Id: *string,
	ReadonlyEndpointFailoverPolicyEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">PartnerManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `PartnerManagedInstanceId`<sup>Required</sup> <a name="PartnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```go
PartnerManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```go
ReadWriteEndpointFailoverPolicy MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
ReadonlyEndpointFailoverPolicyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```go
Timeouts MssqlManagedInstanceFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

### MssqlManagedInstanceFailoverGroupPartnerRegion <a name="MssqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

&mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroupPartnerRegion {

}
```


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

&mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy {
	Mode: *string,
	GraceMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}.

---

##### `GraceMinutes`<sup>Optional</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```go
GraceMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}.

---

### MssqlManagedInstanceFailoverGroupTimeouts <a name="MssqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

&mssqlmanagedinstancefailovergroup.MssqlManagedInstanceFailoverGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceFailoverGroupPartnerRegionList <a name="MssqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.NewMssqlManagedInstanceFailoverGroupPartnerRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MssqlManagedInstanceFailoverGroupPartnerRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```go
func Get(index *f64) MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.NewMssqlManagedInstanceFailoverGroupPartnerRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlManagedInstanceFailoverGroupPartnerRegion
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.NewMssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">ResetGraceMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGraceMinutes` <a name="ResetGraceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```go
func ResetGraceMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">GraceMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GraceMinutesInput`<sup>Optional</sup> <a name="GraceMinutesInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```go
func GraceMinutesInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `GraceMinutes`<sup>Required</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```go
func GraceMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="MssqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlmanagedinstancefailovergroup"

mssqlmanagedinstancefailovergroup.NewMssqlManagedInstanceFailoverGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlManagedInstanceFailoverGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



