# `azurerm_sql_managed_instance_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_sql_managed_instance_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group).

# `sqlManagedInstanceFailoverGroup` Submodule <a name="`sqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstanceFailoverGroup <a name="SqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group azurerm_sql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.NewSqlManagedInstanceFailoverGroup(scope Construct, id *string, config SqlManagedInstanceFailoverGroupConfig) SqlManagedInstanceFailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig">SqlManagedInstanceFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig">SqlManagedInstanceFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">PutReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">ResetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReadWriteEndpointFailoverPolicy` <a name="PutReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```go
func PutReadWriteEndpointFailoverPolicy(value SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts"></a>

```go
func PutTimeouts(value SqlManagedInstanceFailoverGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetReadonlyEndpointFailoverPolicyEnabled` <a name="ResetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```go
func ResetReadonlyEndpointFailoverPolicyEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerRegion">PartnerRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList">SqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference">SqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceNameInput">ManagedInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">PartnerManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">ReadonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">ReadWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceName">ManagedInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">PartnerManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartnerRegion`<sup>Required</sup> <a name="PartnerRegion" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```go
func PartnerRegion() SqlManagedInstanceFailoverGroupPartnerRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList">SqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```go
func ReadWriteEndpointFailoverPolicy() SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeouts"></a>

```go
func Timeouts() SqlManagedInstanceFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference">SqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceNameInput`<sup>Optional</sup> <a name="ManagedInstanceNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceNameInput"></a>

```go
func ManagedInstanceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerManagedInstanceIdInput`<sup>Optional</sup> <a name="PartnerManagedInstanceIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```go
func PartnerManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ReadonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="ReadWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```go
func ReadWriteEndpointFailoverPolicyInput() SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedInstanceName`<sup>Required</sup> <a name="ManagedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceName"></a>

```go
func ManagedInstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerManagedInstanceId`<sup>Required</sup> <a name="PartnerManagedInstanceId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```go
func PartnerManagedInstanceId() *string
```

- *Type:* *string

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceFailoverGroupConfig <a name="SqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

&sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagedInstanceName: *string,
	Name: *string,
	PartnerManagedInstanceId: *string,
	ReadWriteEndpointFailoverPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy,
	ResourceGroupName: *string,
	Id: *string,
	ReadonlyEndpointFailoverPolicyEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.managedInstanceName">ManagedInstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">PartnerManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}.

---

##### `ManagedInstanceName`<sup>Required</sup> <a name="ManagedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.managedInstanceName"></a>

```go
ManagedInstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}.

---

##### `PartnerManagedInstanceId`<sup>Required</sup> <a name="PartnerManagedInstanceId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```go
PartnerManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```go
ReadWriteEndpointFailoverPolicy SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#read_write_endpoint_failover_policy SqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
ReadonlyEndpointFailoverPolicyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```go
Timeouts SqlManagedInstanceFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#timeouts SqlManagedInstanceFailoverGroup#timeouts}

---

### SqlManagedInstanceFailoverGroupPartnerRegion <a name="SqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

&sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroupPartnerRegion {

}
```


### SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

&sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy {
	Mode: *string,
	GraceMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#mode SqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#grace_minutes SqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#mode SqlManagedInstanceFailoverGroup#mode}.

---

##### `GraceMinutes`<sup>Optional</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```go
GraceMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#grace_minutes SqlManagedInstanceFailoverGroup#grace_minutes}.

---

### SqlManagedInstanceFailoverGroupTimeouts <a name="SqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

&sqlmanagedinstancefailovergroup.SqlManagedInstanceFailoverGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#create SqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#delete SqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#read SqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#update SqlManagedInstanceFailoverGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#create SqlManagedInstanceFailoverGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#delete SqlManagedInstanceFailoverGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#read SqlManagedInstanceFailoverGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/sql_managed_instance_failover_group#update SqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceFailoverGroupPartnerRegionList <a name="SqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.NewSqlManagedInstanceFailoverGroupPartnerRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlManagedInstanceFailoverGroupPartnerRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```go
func Get(index *f64) SqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="SqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.NewSqlManagedInstanceFailoverGroupPartnerRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion">SqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlManagedInstanceFailoverGroupPartnerRegion
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion">SqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.NewSqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">ResetGraceMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGraceMinutes` <a name="ResetGraceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```go
func ResetGraceMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">GraceMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GraceMinutesInput`<sup>Optional</sup> <a name="GraceMinutesInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```go
func GraceMinutesInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `GraceMinutes`<sup>Required</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```go
func GraceMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### SqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="SqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstancefailovergroup"

sqlmanagedinstancefailovergroup.NewSqlManagedInstanceFailoverGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlManagedInstanceFailoverGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



