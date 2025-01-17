# `costManagementScheduledAction` Submodule <a name="`costManagementScheduledAction` Submodule" id="@cdktf/provider-azurerm.costManagementScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostManagementScheduledAction <a name="CostManagementScheduledAction" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action azurerm_cost_management_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledAction;

CostManagementScheduledAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .emailAddresses(java.util.List<java.lang.String>)
    .emailAddressSender(java.lang.String)
    .emailSubject(java.lang.String)
    .endDate(java.lang.String)
    .frequency(java.lang.String)
    .name(java.lang.String)
    .startDate(java.lang.String)
    .viewId(java.lang.String)
//  .dayOfMonth(java.lang.Number)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .hourOfDay(java.lang.Number)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .timeouts(CostManagementScheduledActionTimeouts)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailAddressSender">emailAddressSender</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.viewId">viewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}.

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}.

---

##### `emailAddressSender`<sup>Required</sup> <a name="emailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailAddressSender"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}.

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.emailSubject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}.

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}.

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.startDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.viewId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.dayOfMonth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.daysOfWeek"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.hourOfDay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.message"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#timeouts CostManagementScheduledAction#timeouts}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.Initializer.parameter.weeksOfMonth"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts"></a>

```java
public void putTimeouts(CostManagementScheduledActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDayOfMonth"></a>

```java
public void resetDayOfMonth()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetHourOfDay"></a>

```java
public void resetHourOfDay()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetId"></a>

```java
public void resetId()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledAction;

CostManagementScheduledAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledAction;

CostManagementScheduledAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledAction;

CostManagementScheduledAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledAction;

CostManagementScheduledAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CostManagementScheduledAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CostManagementScheduledAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CostManagementScheduledAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CostManagementScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CostManagementScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput">emailAddressSenderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput">emailSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput">viewIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender">emailAddressSender</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId">viewId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeouts"></a>

```java
public CostManagementScheduledActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference">CostManagementScheduledActionTimeoutsOutputReference</a>

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonthInput"></a>

```java
public java.lang.Number getDayOfMonthInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddressSenderInput`<sup>Optional</sup> <a name="emailAddressSenderInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSenderInput"></a>

```java
public java.lang.String getEmailAddressSenderInput();
```

- *Type:* java.lang.String

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubjectInput"></a>

```java
public java.lang.String getEmailSubjectInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewIdInput"></a>

```java
public java.lang.String getViewIdInput();
```

- *Type:* java.lang.String

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddressSender`<sup>Required</sup> <a name="emailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailAddressSender"></a>

```java
public java.lang.String getEmailAddressSender();
```

- *Type:* java.lang.String

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CostManagementScheduledActionConfig <a name="CostManagementScheduledActionConfig" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledActionConfig;

CostManagementScheduledActionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .emailAddresses(java.util.List<java.lang.String>)
    .emailAddressSender(java.lang.String)
    .emailSubject(java.lang.String)
    .endDate(java.lang.String)
    .frequency(java.lang.String)
    .name(java.lang.String)
    .startDate(java.lang.String)
    .viewId(java.lang.String)
//  .dayOfMonth(java.lang.Number)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .hourOfDay(java.lang.Number)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .timeouts(CostManagementScheduledActionTimeouts)
//  .weeksOfMonth(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender">emailAddressSender</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId">viewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#display_name CostManagementScheduledAction#display_name}.

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_addresses CostManagementScheduledAction#email_addresses}.

---

##### `emailAddressSender`<sup>Required</sup> <a name="emailAddressSender" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailAddressSender"></a>

```java
public java.lang.String getEmailAddressSender();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_address_sender CostManagementScheduledAction#email_address_sender}.

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#email_subject CostManagementScheduledAction#email_subject}.

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#end_date CostManagementScheduledAction#end_date}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#frequency CostManagementScheduledAction#frequency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#name CostManagementScheduledAction#name}.

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#start_date CostManagementScheduledAction#start_date}.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.viewId"></a>

```java
public java.lang.String getViewId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#view_id CostManagementScheduledAction#view_id}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#day_of_month CostManagementScheduledAction#day_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#days_of_week CostManagementScheduledAction#days_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#hour_of_day CostManagementScheduledAction#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#id CostManagementScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#message CostManagementScheduledAction#message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.timeouts"></a>

```java
public CostManagementScheduledActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#timeouts CostManagementScheduledAction#timeouts}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionConfig.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.String> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#weeks_of_month CostManagementScheduledAction#weeks_of_month}.

---

### CostManagementScheduledActionTimeouts <a name="CostManagementScheduledActionTimeouts" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledActionTimeouts;

CostManagementScheduledActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#create CostManagementScheduledAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#delete CostManagementScheduledAction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#read CostManagementScheduledAction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cost_management_scheduled_action#update CostManagementScheduledAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostManagementScheduledActionTimeoutsOutputReference <a name="CostManagementScheduledActionTimeoutsOutputReference" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cost_management_scheduled_action.CostManagementScheduledActionTimeoutsOutputReference;

new CostManagementScheduledActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.costManagementScheduledAction.CostManagementScheduledActionTimeouts">CostManagementScheduledActionTimeouts</a>

---



