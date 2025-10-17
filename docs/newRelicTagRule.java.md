# `newRelicTagRule` Submodule <a name="`newRelicTagRule` Submodule" id="@cdktf/provider-azurerm.newRelicTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicTagRule <a name="NewRelicTagRule" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRule;

NewRelicTagRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorId(java.lang.String)
//  .activityLogEnabled(java.lang.Boolean|IResolvable)
//  .azureActiveDirectoryLogEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .logTagFilter(IResolvable|java.util.List<NewRelicTagRuleLogTagFilter>)
//  .metricEnabled(java.lang.Boolean|IResolvable)
//  .metricTagFilter(IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter>)
//  .subscriptionLogEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(NewRelicTagRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.activityLogEnabled">activityLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.azureActiveDirectoryLogEnabled">azureActiveDirectoryLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.logTagFilter">logTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>></code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricEnabled">metricEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricTagFilter">metricTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>></code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.monitorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `activityLogEnabled`<sup>Optional</sup> <a name="activityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.activityLogEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `azureActiveDirectoryLogEnabled`<sup>Optional</sup> <a name="azureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.azureActiveDirectoryLogEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logTagFilter`<sup>Optional</sup> <a name="logTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.logTagFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>>

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `metricEnabled`<sup>Optional</sup> <a name="metricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `metricTagFilter`<sup>Optional</sup> <a name="metricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.metricTagFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>>

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `subscriptionLogEnabled`<sup>Optional</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.subscriptionLogEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter">putLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter">putMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled">resetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled">resetAzureActiveDirectoryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter">resetLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled">resetMetricEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter">resetMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled">resetSubscriptionLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogTagFilter` <a name="putLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter"></a>

```java
public void putLogTagFilter(IResolvable|java.util.List<NewRelicTagRuleLogTagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>>

---

##### `putMetricTagFilter` <a name="putMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter"></a>

```java
public void putMetricTagFilter(IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts"></a>

```java
public void putTimeouts(NewRelicTagRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---

##### `resetActivityLogEnabled` <a name="resetActivityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled"></a>

```java
public void resetActivityLogEnabled()
```

##### `resetAzureActiveDirectoryLogEnabled` <a name="resetAzureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled"></a>

```java
public void resetAzureActiveDirectoryLogEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId"></a>

```java
public void resetId()
```

##### `resetLogTagFilter` <a name="resetLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter"></a>

```java
public void resetLogTagFilter()
```

##### `resetMetricEnabled` <a name="resetMetricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled"></a>

```java
public void resetMetricEnabled()
```

##### `resetMetricTagFilter` <a name="resetMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter"></a>

```java
public void resetMetricTagFilter()
```

##### `resetSubscriptionLogEnabled` <a name="resetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled"></a>

```java
public void resetSubscriptionLogEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRule;

NewRelicTagRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRule;

NewRelicTagRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRule;

NewRelicTagRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRule;

NewRelicTagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NewRelicTagRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NewRelicTagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NewRelicTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter">logTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter">metricTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput">activityLogEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput">azureActiveDirectoryLogEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput">logTagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput">metricEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput">metricTagFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput">subscriptionLogEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled">activityLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled">azureActiveDirectoryLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled">metricEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logTagFilter`<sup>Required</sup> <a name="logTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter"></a>

```java
public NewRelicTagRuleLogTagFilterList getLogTagFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a>

---

##### `metricTagFilter`<sup>Required</sup> <a name="metricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter"></a>

```java
public NewRelicTagRuleMetricTagFilterList getMetricTagFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts"></a>

```java
public NewRelicTagRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a>

---

##### `activityLogEnabledInput`<sup>Optional</sup> <a name="activityLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActivityLogEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `azureActiveDirectoryLogEnabledInput`<sup>Optional</sup> <a name="azureActiveDirectoryLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAzureActiveDirectoryLogEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logTagFilterInput`<sup>Optional</sup> <a name="logTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleLogTagFilter> getLogTagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>>

---

##### `metricEnabledInput`<sup>Optional</sup> <a name="metricEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMetricEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricTagFilterInput`<sup>Optional</sup> <a name="metricTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter> getMetricTagFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>>

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput"></a>

```java
public java.lang.String getMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionLogEnabledInput`<sup>Optional</sup> <a name="subscriptionLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionLogEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput"></a>

```java
public IResolvable|NewRelicTagRuleTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---

##### `activityLogEnabled`<sup>Required</sup> <a name="activityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActivityLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `azureActiveDirectoryLogEnabled`<sup>Required</sup> <a name="azureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAzureActiveDirectoryLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricEnabled`<sup>Required</sup> <a name="metricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `subscriptionLogEnabled`<sup>Required</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicTagRuleConfig <a name="NewRelicTagRuleConfig" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleConfig;

NewRelicTagRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorId(java.lang.String)
//  .activityLogEnabled(java.lang.Boolean|IResolvable)
//  .azureActiveDirectoryLogEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .logTagFilter(IResolvable|java.util.List<NewRelicTagRuleLogTagFilter>)
//  .metricEnabled(java.lang.Boolean|IResolvable)
//  .metricTagFilter(IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter>)
//  .subscriptionLogEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(NewRelicTagRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled">activityLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled">azureActiveDirectoryLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter">logTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>></code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled">metricEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter">metricTagFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>></code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled">subscriptionLogEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `activityLogEnabled`<sup>Optional</sup> <a name="activityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActivityLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `azureActiveDirectoryLogEnabled`<sup>Optional</sup> <a name="azureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAzureActiveDirectoryLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logTagFilter`<sup>Optional</sup> <a name="logTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleLogTagFilter> getLogTagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>>

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `metricEnabled`<sup>Optional</sup> <a name="metricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `metricTagFilter`<sup>Optional</sup> <a name="metricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter> getMetricTagFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>>

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `subscriptionLogEnabled`<sup>Optional</sup> <a name="subscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSubscriptionLogEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts"></a>

```java
public NewRelicTagRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

### NewRelicTagRuleLogTagFilter <a name="NewRelicTagRuleLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleLogTagFilter;

NewRelicTagRuleLogTagFilter.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleMetricTagFilter <a name="NewRelicTagRuleMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleMetricTagFilter;

NewRelicTagRuleMetricTagFilter.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleTimeouts <a name="NewRelicTagRuleTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleTimeouts;

NewRelicTagRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicTagRuleLogTagFilterList <a name="NewRelicTagRuleLogTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleLogTagFilterList;

new NewRelicTagRuleLogTagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get"></a>

```java
public NewRelicTagRuleLogTagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleLogTagFilter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>>

---


### NewRelicTagRuleLogTagFilterOutputReference <a name="NewRelicTagRuleLogTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleLogTagFilterOutputReference;

new NewRelicTagRuleLogTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|NewRelicTagRuleLogTagFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter">NewRelicTagRuleLogTagFilter</a>

---


### NewRelicTagRuleMetricTagFilterList <a name="NewRelicTagRuleMetricTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleMetricTagFilterList;

new NewRelicTagRuleMetricTagFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get"></a>

```java
public NewRelicTagRuleMetricTagFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NewRelicTagRuleMetricTagFilter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>>

---


### NewRelicTagRuleMetricTagFilterOutputReference <a name="NewRelicTagRuleMetricTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleMetricTagFilterOutputReference;

new NewRelicTagRuleMetricTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|NewRelicTagRuleMetricTagFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter">NewRelicTagRuleMetricTagFilter</a>

---


### NewRelicTagRuleTimeoutsOutputReference <a name="NewRelicTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.new_relic_tag_rule.NewRelicTagRuleTimeoutsOutputReference;

new NewRelicTagRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NewRelicTagRuleTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---



