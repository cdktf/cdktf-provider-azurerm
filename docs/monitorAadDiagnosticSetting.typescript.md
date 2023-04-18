# `azurerm_monitor_aad_diagnostic_setting`

Refer to the Terraform Registory for docs: [`azurerm_monitor_aad_diagnostic_setting`](https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting).

# `monitorAadDiagnosticSetting` Submodule <a name="`monitorAadDiagnosticSetting` Submodule" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAadDiagnosticSetting <a name="MonitorAadDiagnosticSetting" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting azurerm_monitor_aad_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

new monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting(scope: Construct, id: string, config: MonitorAadDiagnosticSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig">MonitorAadDiagnosticSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig">MonitorAadDiagnosticSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putLog">putLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubAuthorizationRuleId">resetEventhubAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubName">resetEventhubName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLog` <a name="putLog" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putLog"></a>

```typescript
public putLog(value: IResolvable | MonitorAadDiagnosticSettingLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorAadDiagnosticSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

---

##### `resetEventhubAuthorizationRuleId` <a name="resetEventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```typescript
public resetEventhubAuthorizationRuleId(): void
```

##### `resetEventhubName` <a name="resetEventhubName" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetEventhubName"></a>

```typescript
public resetEventhubName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```typescript
public resetLogAnalyticsWorkspaceId(): void
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetStorageAccountId"></a>

```typescript
public resetStorageAccountId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.log">log</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList">MonitorAadDiagnosticSettingLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference">MonitorAadDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">eventhubAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubNameInput">eventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logInput">logInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleId">eventhubAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubName">eventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.log"></a>

```typescript
public readonly log: MonitorAadDiagnosticSettingLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList">MonitorAadDiagnosticSettingLogList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAadDiagnosticSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference">MonitorAadDiagnosticSettingTimeoutsOutputReference</a>

---

##### `eventhubAuthorizationRuleIdInput`<sup>Optional</sup> <a name="eventhubAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```typescript
public readonly eventhubAuthorizationRuleIdInput: string;
```

- *Type:* string

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubNameInput"></a>

```typescript
public readonly eventhubNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logInput"></a>

```typescript
public readonly logInput: IResolvable | MonitorAadDiagnosticSettingLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MonitorAadDiagnosticSettingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a> | cdktf.IResolvable

---

##### `eventhubAuthorizationRuleId`<sup>Required</sup> <a name="eventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```typescript
public readonly eventhubAuthorizationRuleId: string;
```

- *Type:* string

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAadDiagnosticSettingConfig <a name="MonitorAadDiagnosticSettingConfig" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

const monitorAadDiagnosticSettingConfig: monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.log">log</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#name MonitorAadDiagnosticSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">eventhubAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#eventhub_authorization_rule_id MonitorAadDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubName">eventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#eventhub_name MonitorAadDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#id MonitorAadDiagnosticSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#log_analytics_workspace_id MonitorAadDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#storage_account_id MonitorAadDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.log"></a>

```typescript
public readonly log: IResolvable | MonitorAadDiagnosticSettingLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]

log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#log MonitorAadDiagnosticSetting#log}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#name MonitorAadDiagnosticSetting#name}.

---

##### `eventhubAuthorizationRuleId`<sup>Optional</sup> <a name="eventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```typescript
public readonly eventhubAuthorizationRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#eventhub_authorization_rule_id MonitorAadDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `eventhubName`<sup>Optional</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#eventhub_name MonitorAadDiagnosticSetting#eventhub_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#id MonitorAadDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#log_analytics_workspace_id MonitorAadDiagnosticSetting#log_analytics_workspace_id}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#storage_account_id MonitorAadDiagnosticSetting#storage_account_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAadDiagnosticSettingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#timeouts MonitorAadDiagnosticSetting#timeouts}

---

### MonitorAadDiagnosticSettingLog <a name="MonitorAadDiagnosticSettingLog" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

const monitorAadDiagnosticSettingLog: monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#category MonitorAadDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#category MonitorAadDiagnosticSetting#category}.

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: MonitorAadDiagnosticSettingLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#retention_policy MonitorAadDiagnosticSetting#retention_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}.

---

### MonitorAadDiagnosticSettingLogRetentionPolicy <a name="MonitorAadDiagnosticSettingLogRetentionPolicy" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

const monitorAadDiagnosticSettingLogRetentionPolicy: monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#days MonitorAadDiagnosticSetting#days}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#days MonitorAadDiagnosticSetting#days}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#enabled MonitorAadDiagnosticSetting#enabled}.

---

### MonitorAadDiagnosticSettingTimeouts <a name="MonitorAadDiagnosticSettingTimeouts" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

const monitorAadDiagnosticSettingTimeouts: monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#create MonitorAadDiagnosticSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#delete MonitorAadDiagnosticSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#read MonitorAadDiagnosticSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#update MonitorAadDiagnosticSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#create MonitorAadDiagnosticSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#delete MonitorAadDiagnosticSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#read MonitorAadDiagnosticSetting#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_aad_diagnostic_setting#update MonitorAadDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAadDiagnosticSettingLogList <a name="MonitorAadDiagnosticSettingLogList" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

new monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.get"></a>

```typescript
public get(index: number): MonitorAadDiagnosticSettingLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAadDiagnosticSettingLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a>[]

---


### MonitorAadDiagnosticSettingLogOutputReference <a name="MonitorAadDiagnosticSettingLogOutputReference" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

new monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: MonitorAadDiagnosticSettingLogRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference">MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference">MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: MonitorAadDiagnosticSettingLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAadDiagnosticSettingLog | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLog">MonitorAadDiagnosticSettingLog</a> | cdktf.IResolvable

---


### MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference <a name="MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

new monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAadDiagnosticSettingLogRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingLogRetentionPolicy">MonitorAadDiagnosticSettingLogRetentionPolicy</a>

---


### MonitorAadDiagnosticSettingTimeoutsOutputReference <a name="MonitorAadDiagnosticSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorAadDiagnosticSetting } from '@cdktf/provider-azurerm'

new monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAadDiagnosticSettingTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAadDiagnosticSetting.MonitorAadDiagnosticSettingTimeouts">MonitorAadDiagnosticSettingTimeouts</a> | cdktf.IResolvable

---



