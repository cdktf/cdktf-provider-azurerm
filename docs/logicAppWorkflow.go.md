# `azurerm_logic_app_workflow`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_workflow`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow).

# `logicAppWorkflow` Submodule <a name="`logicAppWorkflow` Submodule" id="@cdktf/provider-azurerm.logicAppWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppWorkflow <a name="LogicAppWorkflow" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow azurerm_logic_app_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflow(scope Construct, id *string, config LogicAppWorkflowConfig) LogicAppWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl">PutAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl">ResetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId">ResetIntegrationServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId">ResetLogicAppIntegrationAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters">ResetWorkflowParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema">ResetWorkflowSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion">ResetWorkflowVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl"></a>

```go
func PutAccessControl(value LogicAppWorkflowAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity"></a>

```go
func PutIdentity(value LogicAppWorkflowIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts"></a>

```go
func PutTimeouts(value LogicAppWorkflowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

---

##### `ResetAccessControl` <a name="ResetAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl"></a>

```go
func ResetAccessControl()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetIntegrationServiceEnvironmentId` <a name="ResetIntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId"></a>

```go
func ResetIntegrationServiceEnvironmentId()
```

##### `ResetLogicAppIntegrationAccountId` <a name="ResetLogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId"></a>

```go
func ResetLogicAppIntegrationAccountId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkflowParameters` <a name="ResetWorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters"></a>

```go
func ResetWorkflowParameters()
```

##### `ResetWorkflowSchema` <a name="ResetWorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema"></a>

```go
func ResetWorkflowSchema()
```

##### `ResetWorkflowVersion` <a name="ResetWorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion"></a>

```go
func ResetWorkflowVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.LogicAppWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.LogicAppWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.LogicAppWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint">AccessEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses">ConnectorEndpointIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses">ConnectorOutboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses">WorkflowEndpointIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses">WorkflowOutboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput">AccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput">IntegrationServiceEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput">LogicAppIntegrationAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput">WorkflowParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput">WorkflowSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput">WorkflowVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId">IntegrationServiceEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId">LogicAppIntegrationAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters">WorkflowParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema">WorkflowSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion">WorkflowVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl"></a>

```go
func AccessControl() LogicAppWorkflowAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a>

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint"></a>

```go
func AccessEndpoint() *string
```

- *Type:* *string

---

##### `ConnectorEndpointIpAddresses`<sup>Required</sup> <a name="ConnectorEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses"></a>

```go
func ConnectorEndpointIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorOutboundIpAddresses`<sup>Required</sup> <a name="ConnectorOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses"></a>

```go
func ConnectorOutboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity"></a>

```go
func Identity() LogicAppWorkflowIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts"></a>

```go
func Timeouts() LogicAppWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a>

---

##### `WorkflowEndpointIpAddresses`<sup>Required</sup> <a name="WorkflowEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses"></a>

```go
func WorkflowEndpointIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `WorkflowOutboundIpAddresses`<sup>Required</sup> <a name="WorkflowOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses"></a>

```go
func WorkflowOutboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput"></a>

```go
func AccessControlInput() LogicAppWorkflowAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput"></a>

```go
func IdentityInput() LogicAppWorkflowIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationServiceEnvironmentIdInput`<sup>Optional</sup> <a name="IntegrationServiceEnvironmentIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput"></a>

```go
func IntegrationServiceEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogicAppIntegrationAccountIdInput`<sup>Optional</sup> <a name="LogicAppIntegrationAccountIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput"></a>

```go
func LogicAppIntegrationAccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkflowParametersInput`<sup>Optional</sup> <a name="WorkflowParametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput"></a>

```go
func WorkflowParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkflowSchemaInput`<sup>Optional</sup> <a name="WorkflowSchemaInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput"></a>

```go
func WorkflowSchemaInput() *string
```

- *Type:* *string

---

##### `WorkflowVersionInput`<sup>Optional</sup> <a name="WorkflowVersionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput"></a>

```go
func WorkflowVersionInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationServiceEnvironmentId`<sup>Required</sup> <a name="IntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId"></a>

```go
func IntegrationServiceEnvironmentId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogicAppIntegrationAccountId`<sup>Required</sup> <a name="LogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId"></a>

```go
func LogicAppIntegrationAccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkflowParameters`<sup>Required</sup> <a name="WorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters"></a>

```go
func WorkflowParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkflowSchema`<sup>Required</sup> <a name="WorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema"></a>

```go
func WorkflowSchema() *string
```

- *Type:* *string

---

##### `WorkflowVersion`<sup>Required</sup> <a name="WorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion"></a>

```go
func WorkflowVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppWorkflowAccessControl <a name="LogicAppWorkflowAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControl {
	Action: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowAccessControlAction,
	Content: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowAccessControlContent,
	Trigger: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger,
	WorkflowManagement: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement">WorkflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | workflow_management block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action"></a>

```go
Action LogicAppWorkflowAccessControlAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#action LogicAppWorkflow#action}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content"></a>

```go
Content LogicAppWorkflowAccessControlContent
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#content LogicAppWorkflow#content}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger"></a>

```go
Trigger LogicAppWorkflowAccessControlTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#trigger LogicAppWorkflow#trigger}

---

##### `WorkflowManagement`<sup>Optional</sup> <a name="WorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement"></a>

```go
WorkflowManagement LogicAppWorkflowAccessControlWorkflowManagement
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

workflow_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_management LogicAppWorkflow#workflow_management}

---

### LogicAppWorkflowAccessControlAction <a name="LogicAppWorkflowAccessControlAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlAction {
	AllowedCallerIpAddressRange: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange"></a>

```go
AllowedCallerIpAddressRange *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlContent <a name="LogicAppWorkflowAccessControlContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlContent {
	AllowedCallerIpAddressRange: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange"></a>

```go
AllowedCallerIpAddressRange *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlTrigger <a name="LogicAppWorkflowAccessControlTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlTrigger {
	AllowedCallerIpAddressRange: *[]*string,
	OpenAuthenticationPolicy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy">OpenAuthenticationPolicy</a></code> | <code>interface{}</code> | open_authentication_policy block. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange"></a>

```go
AllowedCallerIpAddressRange *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

##### `OpenAuthenticationPolicy`<sup>Optional</sup> <a name="OpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy"></a>

```go
OpenAuthenticationPolicy interface{}
```

- *Type:* interface{}

open_authentication_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#open_authentication_policy LogicAppWorkflow#open_authentication_policy}

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy {
	Claim: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim">Claim</a></code> | <code>interface{}</code> | claim block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim"></a>

```go
Claim interface{}
```

- *Type:* interface{}

claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#claim LogicAppWorkflow#claim}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}.

---

### LogicAppWorkflowAccessControlWorkflowManagement <a name="LogicAppWorkflowAccessControlWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowAccessControlWorkflowManagement {
	AllowedCallerIpAddressRange: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange"></a>

```go
AllowedCallerIpAddressRange *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowConfig <a name="LogicAppWorkflowConfig" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AccessControl: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowAccessControl,
	Enabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowIdentity,
	IntegrationServiceEnvironmentId: *string,
	LogicAppIntegrationAccountId: *string,
	Parameters: *map[string]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.logicAppWorkflow.LogicAppWorkflowTimeouts,
	WorkflowParameters: *map[string]*string,
	WorkflowSchema: *string,
	WorkflowVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId">IntegrationServiceEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId">LogicAppIntegrationAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters">WorkflowParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema">WorkflowSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion">WorkflowVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}.

---

##### `AccessControl`<sup>Optional</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl"></a>

```go
AccessControl LogicAppWorkflowAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#access_control LogicAppWorkflow#access_control}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity"></a>

```go
Identity LogicAppWorkflowIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#identity LogicAppWorkflow#identity}

---

##### `IntegrationServiceEnvironmentId`<sup>Optional</sup> <a name="IntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId"></a>

```go
IntegrationServiceEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}.

---

##### `LogicAppIntegrationAccountId`<sup>Optional</sup> <a name="LogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId"></a>

```go
LogicAppIntegrationAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts"></a>

```go
Timeouts LogicAppWorkflowTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#timeouts LogicAppWorkflow#timeouts}

---

##### `WorkflowParameters`<sup>Optional</sup> <a name="WorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters"></a>

```go
WorkflowParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}.

---

##### `WorkflowSchema`<sup>Optional</sup> <a name="WorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema"></a>

```go
WorkflowSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}.

---

##### `WorkflowVersion`<sup>Optional</sup> <a name="WorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion"></a>

```go
WorkflowVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}.

---

### LogicAppWorkflowIdentity <a name="LogicAppWorkflowIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}.

---

### LogicAppWorkflowTimeouts <a name="LogicAppWorkflowTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

&logicappworkflow.LogicAppWorkflowTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppWorkflowAccessControlActionOutputReference <a name="LogicAppWorkflowAccessControlActionOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowAccessControlActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```go
func AllowedCallerIpAddressRangeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange"></a>

```go
func AllowedCallerIpAddressRange() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowAccessControlAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---


### LogicAppWorkflowAccessControlContentOutputReference <a name="LogicAppWorkflowAccessControlContentOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowAccessControlContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```go
func AllowedCallerIpAddressRangeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange"></a>

```go
func AllowedCallerIpAddressRange() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowAccessControlContent
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---


### LogicAppWorkflowAccessControlOutputReference <a name="LogicAppWorkflowAccessControlOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement">PutWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement">ResetWorkflowManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction"></a>

```go
func PutAction(value LogicAppWorkflowAccessControlAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `PutContent` <a name="PutContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent"></a>

```go
func PutContent(value LogicAppWorkflowAccessControlContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger"></a>

```go
func PutTrigger(value LogicAppWorkflowAccessControlTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `PutWorkflowManagement` <a name="PutWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement"></a>

```go
func PutWorkflowManagement(value LogicAppWorkflowAccessControlWorkflowManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger"></a>

```go
func ResetTrigger()
```

##### `ResetWorkflowManagement` <a name="ResetWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement"></a>

```go
func ResetWorkflowManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement">WorkflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput">ContentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput">WorkflowManagementInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action"></a>

```go
func Action() LogicAppWorkflowAccessControlActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content"></a>

```go
func Content() LogicAppWorkflowAccessControlContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger"></a>

```go
func Trigger() LogicAppWorkflowAccessControlTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a>

---

##### `WorkflowManagement`<sup>Required</sup> <a name="WorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement"></a>

```go
func WorkflowManagement() LogicAppWorkflowAccessControlWorkflowManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput"></a>

```go
func ActionInput() LogicAppWorkflowAccessControlAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput"></a>

```go
func ContentInput() LogicAppWorkflowAccessControlContent
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput"></a>

```go
func TriggerInput() LogicAppWorkflowAccessControlTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `WorkflowManagementInput`<sup>Optional</sup> <a name="WorkflowManagementInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput"></a>

```go
func WorkflowManagementInput() LogicAppWorkflowAccessControlWorkflowManagement
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get"></a>

```go
func Get(index *f64) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get"></a>

```go
func Get(index *f64) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim">PutClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaim` <a name="PutClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim"></a>

```go
func PutClaim(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim">Claim</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput">ClaimInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim"></a>

```go
func Claim() LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a>

---

##### `ClaimInput`<sup>Optional</sup> <a name="ClaimInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput"></a>

```go
func ClaimInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppWorkflowAccessControlTriggerOutputReference <a name="LogicAppWorkflowAccessControlTriggerOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowAccessControlTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy">PutOpenAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy">ResetOpenAuthenticationPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenAuthenticationPolicy` <a name="PutOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy"></a>

```go
func PutOpenAuthenticationPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOpenAuthenticationPolicy` <a name="ResetOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy"></a>

```go
func ResetOpenAuthenticationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy">OpenAuthenticationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput">OpenAuthenticationPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OpenAuthenticationPolicy`<sup>Required</sup> <a name="OpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy"></a>

```go
func OpenAuthenticationPolicy() LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a>

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```go
func AllowedCallerIpAddressRangeInput() *[]*string
```

- *Type:* *[]*string

---

##### `OpenAuthenticationPolicyInput`<sup>Optional</sup> <a name="OpenAuthenticationPolicyInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput"></a>

```go
func OpenAuthenticationPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange"></a>

```go
func AllowedCallerIpAddressRange() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowAccessControlTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---


### LogicAppWorkflowAccessControlWorkflowManagementOutputReference <a name="LogicAppWorkflowAccessControlWorkflowManagementOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowAccessControlWorkflowManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowAccessControlWorkflowManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```go
func AllowedCallerIpAddressRangeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange"></a>

```go
func AllowedCallerIpAddressRange() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowAccessControlWorkflowManagement
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---


### LogicAppWorkflowIdentityOutputReference <a name="LogicAppWorkflowIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppWorkflowIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---


### LogicAppWorkflowTimeoutsOutputReference <a name="LogicAppWorkflowTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/logicappworkflow"

logicappworkflow.NewLogicAppWorkflowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppWorkflowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



