# `azurerm_automation_runbook`

Refer to the Terraform Registory for docs: [`azurerm_automation_runbook`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook).

# `automationRunbook` Submodule <a name="`automationRunbook` Submodule" id="@cdktf/provider-azurerm.automationRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRunbook <a name="AutomationRunbook" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook azurerm_automation_runbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbook(scope: Construct, id: string, config: AutomationRunbookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig">AutomationRunbookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig">AutomationRunbookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft">putDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule">putJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink">putPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft">resetDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule">resetJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel">resetLogActivityTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink">resetPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDraft` <a name="putDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft"></a>

```typescript
public putDraft(value: AutomationRunbookDraft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `putJobSchedule` <a name="putJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule"></a>

```typescript
public putJobSchedule(value: IResolvable | AutomationRunbookJobSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]

---

##### `putPublishContentLink` <a name="putPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink"></a>

```typescript
public putPublishContentLink(value: AutomationRunbookPublishContentLink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationRunbookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDraft` <a name="resetDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft"></a>

```typescript
public resetDraft(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobSchedule` <a name="resetJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule"></a>

```typescript
public resetJobSchedule(): void
```

##### `resetLogActivityTraceLevel` <a name="resetLogActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel"></a>

```typescript
public resetLogActivityTraceLevel(): void
```

##### `resetPublishContentLink` <a name="resetPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink"></a>

```typescript
public resetPublishContentLink(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

automationRunbook.AutomationRunbook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

automationRunbook.AutomationRunbook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

automationRunbook.AutomationRunbook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink">publishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput">draftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput">jobScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput">logActivityTraceLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput">logProgressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput">logVerboseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput">publishContentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput">runbookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel">logActivityTraceLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress">logProgress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose">logVerbose</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType">runbookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft"></a>

```typescript
public readonly draft: AutomationRunbookDraftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a>

---

##### `jobSchedule`<sup>Required</sup> <a name="jobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule"></a>

```typescript
public readonly jobSchedule: AutomationRunbookJobScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a>

---

##### `publishContentLink`<sup>Required</sup> <a name="publishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink"></a>

```typescript
public readonly publishContentLink: AutomationRunbookPublishContentLinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationRunbookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a>

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput"></a>

```typescript
public readonly automationAccountNameInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `draftInput`<sup>Optional</sup> <a name="draftInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput"></a>

```typescript
public readonly draftInput: AutomationRunbookDraft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobScheduleInput`<sup>Optional</sup> <a name="jobScheduleInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput"></a>

```typescript
public readonly jobScheduleInput: IResolvable | AutomationRunbookJobSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logActivityTraceLevelInput`<sup>Optional</sup> <a name="logActivityTraceLevelInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput"></a>

```typescript
public readonly logActivityTraceLevelInput: number;
```

- *Type:* number

---

##### `logProgressInput`<sup>Optional</sup> <a name="logProgressInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput"></a>

```typescript
public readonly logProgressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logVerboseInput`<sup>Optional</sup> <a name="logVerboseInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput"></a>

```typescript
public readonly logVerboseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publishContentLinkInput`<sup>Optional</sup> <a name="publishContentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput"></a>

```typescript
public readonly publishContentLinkInput: AutomationRunbookPublishContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `runbookTypeInput`<sup>Optional</sup> <a name="runbookTypeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput"></a>

```typescript
public readonly runbookTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationRunbookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logActivityTraceLevel`<sup>Required</sup> <a name="logActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel"></a>

```typescript
public readonly logActivityTraceLevel: number;
```

- *Type:* number

---

##### `logProgress`<sup>Required</sup> <a name="logProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress"></a>

```typescript
public readonly logProgress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logVerbose`<sup>Required</sup> <a name="logVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose"></a>

```typescript
public readonly logVerbose: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `runbookType`<sup>Required</sup> <a name="runbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType"></a>

```typescript
public readonly runbookType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRunbookConfig <a name="AutomationRunbookConfig" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookConfig: automationRunbook.AutomationRunbookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress">logProgress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose">logVerbose</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType">runbookType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft">draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule">jobSchedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel">logActivityTraceLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink">publishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `logProgress`<sup>Required</sup> <a name="logProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress"></a>

```typescript
public readonly logProgress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `logVerbose`<sup>Required</sup> <a name="logVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose"></a>

```typescript
public readonly logVerbose: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `runbookType`<sup>Required</sup> <a name="runbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType"></a>

```typescript
public readonly runbookType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft"></a>

```typescript
public readonly draft: AutomationRunbookDraft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule"></a>

```typescript
public readonly jobSchedule: IResolvable | AutomationRunbookJobSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `logActivityTraceLevel`<sup>Optional</sup> <a name="logActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel"></a>

```typescript
public readonly logActivityTraceLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `publishContentLink`<sup>Optional</sup> <a name="publishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink"></a>

```typescript
public readonly publishContentLink: AutomationRunbookPublishContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationRunbookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

### AutomationRunbookDraft <a name="AutomationRunbookDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookDraft: automationRunbook.AutomationRunbookDraft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink">contentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled">editModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes">outputTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]</code> | parameters block. |

---

##### `contentLink`<sup>Optional</sup> <a name="contentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink"></a>

```typescript
public readonly contentLink: AutomationRunbookDraftContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}

---

##### `editModeEnabled`<sup>Optional</sup> <a name="editModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled"></a>

```typescript
public readonly editModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}.

---

##### `outputTypes`<sup>Optional</sup> <a name="outputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes"></a>

```typescript
public readonly outputTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | AutomationRunbookDraftParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}

---

### AutomationRunbookDraftContentLink <a name="AutomationRunbookDraftContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookDraftContentLink: automationRunbook.AutomationRunbookDraftContentLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash"></a>

```typescript
public readonly hash: AutomationRunbookDraftContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookDraftContentLinkHash <a name="AutomationRunbookDraftContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookDraftContentLinkHash: automationRunbook.AutomationRunbookDraftContentLinkHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookDraftParameters <a name="AutomationRunbookDraftParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookDraftParameters: automationRunbook.AutomationRunbookDraftParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#key AutomationRunbook#key}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#type AutomationRunbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#position AutomationRunbook#position}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#key AutomationRunbook#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#type AutomationRunbook#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#position AutomationRunbook#position}.

---

### AutomationRunbookJobSchedule <a name="AutomationRunbookJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookJobSchedule: automationRunbook.AutomationRunbookJobSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId">jobScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn">runOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName">scheduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}. |

---

##### `jobScheduleId`<sup>Optional</sup> <a name="jobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId"></a>

```typescript
public readonly jobScheduleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}.

---

##### `runOn`<sup>Optional</sup> <a name="runOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}.

---

##### `scheduleName`<sup>Optional</sup> <a name="scheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}.

---

### AutomationRunbookPublishContentLink <a name="AutomationRunbookPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookPublishContentLink: automationRunbook.AutomationRunbookPublishContentLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash"></a>

```typescript
public readonly hash: AutomationRunbookPublishContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookPublishContentLinkHash <a name="AutomationRunbookPublishContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookPublishContentLinkHash: automationRunbook.AutomationRunbookPublishContentLinkHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookTimeouts <a name="AutomationRunbookTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

const automationRunbookTimeouts: automationRunbook.AutomationRunbookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#create AutomationRunbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#read AutomationRunbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#update AutomationRunbook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#create AutomationRunbook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#read AutomationRunbook#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/automation_runbook#update AutomationRunbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRunbookDraftContentLinkHashOutputReference <a name="AutomationRunbookDraftContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationRunbookDraftContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---


### AutomationRunbookDraftContentLinkOutputReference <a name="AutomationRunbookDraftContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookDraftContentLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash">resetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash"></a>

```typescript
public putHash(value: AutomationRunbookDraftContentLinkHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `resetHash` <a name="resetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash"></a>

```typescript
public resetHash(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput">hashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash"></a>

```typescript
public readonly hash: AutomationRunbookDraftContentLinkHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput"></a>

```typescript
public readonly hashInput: AutomationRunbookDraftContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationRunbookDraftContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---


### AutomationRunbookDraftOutputReference <a name="AutomationRunbookDraftOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookDraftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink">putContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink">resetContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled">resetEditModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes">resetOutputTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentLink` <a name="putContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink"></a>

```typescript
public putContentLink(value: AutomationRunbookDraftContentLink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | AutomationRunbookDraftParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]

---

##### `resetContentLink` <a name="resetContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink"></a>

```typescript
public resetContentLink(): void
```

##### `resetEditModeEnabled` <a name="resetEditModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled"></a>

```typescript
public resetEditModeEnabled(): void
```

##### `resetOutputTypes` <a name="resetOutputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes"></a>

```typescript
public resetOutputTypes(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink">contentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput">contentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput">editModeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput">outputTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled">editModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes">outputTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentLink`<sup>Required</sup> <a name="contentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink"></a>

```typescript
public readonly contentLink: AutomationRunbookDraftContentLinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters"></a>

```typescript
public readonly parameters: AutomationRunbookDraftParametersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a>

---

##### `contentLinkInput`<sup>Optional</sup> <a name="contentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput"></a>

```typescript
public readonly contentLinkInput: AutomationRunbookDraftContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `editModeEnabledInput`<sup>Optional</sup> <a name="editModeEnabledInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput"></a>

```typescript
public readonly editModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputTypesInput`<sup>Optional</sup> <a name="outputTypesInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput"></a>

```typescript
public readonly outputTypesInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | AutomationRunbookDraftParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]

---

##### `editModeEnabled`<sup>Required</sup> <a name="editModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled"></a>

```typescript
public readonly editModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputTypes`<sup>Required</sup> <a name="outputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes"></a>

```typescript
public readonly outputTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationRunbookDraft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---


### AutomationRunbookDraftParametersList <a name="AutomationRunbookDraftParametersList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookDraftParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get"></a>

```typescript
public get(index: number): AutomationRunbookDraftParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRunbookDraftParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>[]

---


### AutomationRunbookDraftParametersOutputReference <a name="AutomationRunbookDraftParametersOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookDraftParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory">resetMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition">resetPosition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetMandatory` <a name="resetMandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory"></a>

```typescript
public resetMandatory(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition"></a>

```typescript
public resetPosition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput">mandatoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory">mandatory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `mandatoryInput`<sup>Optional</sup> <a name="mandatoryInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput"></a>

```typescript
public readonly mandatoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory"></a>

```typescript
public readonly mandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRunbookDraftParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters">AutomationRunbookDraftParameters</a>

---


### AutomationRunbookJobScheduleList <a name="AutomationRunbookJobScheduleList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookJobScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get"></a>

```typescript
public get(index: number): AutomationRunbookJobScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRunbookJobSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>[]

---


### AutomationRunbookJobScheduleOutputReference <a name="AutomationRunbookJobScheduleOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookJobScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId">resetJobScheduleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn">resetRunOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName">resetScheduleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJobScheduleId` <a name="resetJobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId"></a>

```typescript
public resetJobScheduleId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRunOn` <a name="resetRunOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn"></a>

```typescript
public resetRunOn(): void
```

##### `resetScheduleName` <a name="resetScheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName"></a>

```typescript
public resetScheduleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput">jobScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput">runOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput">scheduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId">jobScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName">scheduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobScheduleIdInput`<sup>Optional</sup> <a name="jobScheduleIdInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput"></a>

```typescript
public readonly jobScheduleIdInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `runOnInput`<sup>Optional</sup> <a name="runOnInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput"></a>

```typescript
public readonly runOnInput: string;
```

- *Type:* string

---

##### `scheduleNameInput`<sup>Optional</sup> <a name="scheduleNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput"></a>

```typescript
public readonly scheduleNameInput: string;
```

- *Type:* string

---

##### `jobScheduleId`<sup>Required</sup> <a name="jobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId"></a>

```typescript
public readonly jobScheduleId: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRunbookJobSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule">AutomationRunbookJobSchedule</a>

---


### AutomationRunbookPublishContentLinkHashOutputReference <a name="AutomationRunbookPublishContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationRunbookPublishContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---


### AutomationRunbookPublishContentLinkOutputReference <a name="AutomationRunbookPublishContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookPublishContentLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash">putHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash">resetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHash` <a name="putHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash"></a>

```typescript
public putHash(value: AutomationRunbookPublishContentLinkHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `resetHash` <a name="resetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash"></a>

```typescript
public resetHash(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput">hashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash"></a>

```typescript
public readonly hash: AutomationRunbookPublishContentLinkHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a>

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput"></a>

```typescript
public readonly hashInput: AutomationRunbookPublishContentLinkHash;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutomationRunbookPublishContentLink;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---


### AutomationRunbookTimeoutsOutputReference <a name="AutomationRunbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationRunbook } from '@cdktf/provider-azurerm'

new automationRunbook.AutomationRunbookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRunbookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---



