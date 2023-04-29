# `azurerm_mssql_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_mssql_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group).

# `mssqlFailoverGroup` Submodule <a name="`mssqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlFailoverGroup <a name="MssqlFailoverGroup" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group azurerm_mssql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.NewMssqlFailoverGroup(scope Construct, id *string, config MssqlFailoverGroupConfig) MssqlFailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig">MssqlFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig">MssqlFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer">PutPartnerServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy">PutReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetDatabases">ResetDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">ResetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPartnerServer` <a name="PutPartnerServer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer"></a>

```go
func PutPartnerServer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReadWriteEndpointFailoverPolicy` <a name="PutReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```go
func PutReadWriteEndpointFailoverPolicy(value MssqlFailoverGroupReadWriteEndpointFailoverPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts"></a>

```go
func PutTimeouts(value MssqlFailoverGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>

---

##### `ResetDatabases` <a name="ResetDatabases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetDatabases"></a>

```go
func ResetDatabases()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetReadonlyEndpointFailoverPolicyEnabled` <a name="ResetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```go
func ResetReadonlyEndpointFailoverPolicyEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.MssqlFailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.MssqlFailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.MssqlFailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServer">PartnerServer</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList">MssqlFailoverGroupPartnerServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference">MssqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databasesInput">DatabasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServerInput">PartnerServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">ReadonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput">ReadWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databases">Databases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartnerServer`<sup>Required</sup> <a name="PartnerServer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServer"></a>

```go
func PartnerServer() MssqlFailoverGroupPartnerServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList">MssqlFailoverGroupPartnerServerList</a>

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```go
func ReadWriteEndpointFailoverPolicy() MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeouts"></a>

```go
func Timeouts() MssqlFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference">MssqlFailoverGroupTimeoutsOutputReference</a>

---

##### `DatabasesInput`<sup>Optional</sup> <a name="DatabasesInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databasesInput"></a>

```go
func DatabasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerServerInput`<sup>Optional</sup> <a name="PartnerServerInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServerInput"></a>

```go
func PartnerServerInput() interface{}
```

- *Type:* interface{}

---

##### `ReadonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReadWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="ReadWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```go
func ReadWriteEndpointFailoverPolicyInput() MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databases"></a>

```go
func Databases() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
func ReadonlyEndpointFailoverPolicyEnabled() interface{}
```

- *Type:* interface{}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlFailoverGroupConfig <a name="MssqlFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

&mssqlfailovergroup.MssqlFailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PartnerServer: interface{},
	ReadWriteEndpointFailoverPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy,
	ServerId: *string,
	Databases: *[]*string,
	Id: *string,
	ReadonlyEndpointFailoverPolicyEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.partnerServer">PartnerServer</a></code> | <code>interface{}</code> | partner_server block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">ReadWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.databases">Databases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">ReadonlyEndpointFailoverPolicyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}.

---

##### `PartnerServer`<sup>Required</sup> <a name="PartnerServer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.partnerServer"></a>

```go
PartnerServer interface{}
```

- *Type:* interface{}

partner_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#partner_server MssqlFailoverGroup#partner_server}

---

##### `ReadWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="ReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```go
ReadWriteEndpointFailoverPolicy MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}.

---

##### `Databases`<sup>Optional</sup> <a name="Databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.databases"></a>

```go
Databases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReadonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="ReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```go
ReadonlyEndpointFailoverPolicyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.timeouts"></a>

```go
Timeouts MssqlFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#timeouts MssqlFailoverGroup#timeouts}

---

### MssqlFailoverGroupPartnerServer <a name="MssqlFailoverGroupPartnerServer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

&mssqlfailovergroup.MssqlFailoverGroupPartnerServer {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MssqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

&mssqlfailovergroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy {
	Mode: *string,
	GraceMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}.

---

##### `GraceMinutes`<sup>Optional</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```go
GraceMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}.

---

### MssqlFailoverGroupTimeouts <a name="MssqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

&mssqlfailovergroup.MssqlFailoverGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlFailoverGroupPartnerServerList <a name="MssqlFailoverGroupPartnerServerList" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.NewMssqlFailoverGroupPartnerServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MssqlFailoverGroupPartnerServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get"></a>

```go
func Get(index *f64) MssqlFailoverGroupPartnerServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlFailoverGroupPartnerServerOutputReference <a name="MssqlFailoverGroupPartnerServerOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.NewMssqlFailoverGroupPartnerServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MssqlFailoverGroupPartnerServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.NewMssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">ResetGraceMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGraceMinutes` <a name="ResetGraceMinutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```go
func ResetGraceMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">GraceMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">GraceMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GraceMinutesInput`<sup>Optional</sup> <a name="GraceMinutesInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```go
func GraceMinutesInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `GraceMinutes`<sup>Required</sup> <a name="GraceMinutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```go
func GraceMinutes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlFailoverGroupTimeoutsOutputReference <a name="MssqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlfailovergroup"

mssqlfailovergroup.NewMssqlFailoverGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlFailoverGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



